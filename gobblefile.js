const gobble = require('gobble')
const puppeteer = require('puppeteer')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const { listSync } = require('fs-plus')
const { extname, basename, join } = require('path')

const src = gobble('src')
const test = gobble('test')

module.exports = ({
  dev () {
    const lib = prefix(compile(src))
    const components = test.include('*.html').transform(wrapHTML)
    return gobble([lib, components])
  },
  generate () {
    const lib = prefix(compile(src))
    const components = test.include('*.html').transform(wrapHTML)
    return gobble([components, lib]).transform(screenshot, { extension: '.expected.png' })
  },
  test () {
    const lib = prefix(compile(src))
    const components = test.include('*.html').transform(wrapHTML)
    const actualShots = gobble([components, lib]).transform(screenshot, { extension: '.actual.png' })
    const expectedShots = test.include('*.png')
    const specs = test.include('*.js')
    return gobble([actualShots, expectedShots, specs])
  },
  build () {
    const compiled = prefix(compile(src))
    const minified = minify(compiled)
    return gobble([compiled, minified])
  }
})[gobble.env()]()

function compile (node) {
  return node.transform('sass', {
    src: 'metro-bootstrap.scss',
    dest: 'metro-bootstrap.css',
    map: true,
    includePaths: ['.']
  })
}

function prefix (node) {
  return node.transform('postcss', {
    plugins: [autoprefixer],
    src: 'metro-bootstrap.css',
    dest: 'metro-bootstrap.css',
    map: { inline: false }
  })
}

function minify (node) {
  return node.transform('postcss', {
    plugins: [cssnano],
    src: 'metro-bootstrap.css',
    dest: 'metro-bootstrap.min.css',
    map: { inline: false }
  })
}

function wrapHTML (input, options) {
  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="metro-bootstrap.css">
    </head>
    <body>
      ${input}
    </body>
    </html>
  `
}

async function screenshot (inDir, outDir, options) {
  const browser = await puppeteer.launch()
  const components = listSync(inDir).filter(p => extname(p) === '.html')
  const shots = components.map(async p => {
    const page = await browser.newPage()
    const path = join(outDir, `${basename(p)}${options.extension}`)
    const fullPage = true

    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(`file://${p}`)
    await page.screenshot({ path, fullPage })
    await page.close()
  })

  await Promise.all(shots)
  browser.close()
}
