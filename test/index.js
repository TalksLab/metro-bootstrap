const path = require('path')
const qunit = require('qunit')
const BlinkDiff = require('blink-diff')
const fsPlus = require('fs-plus')

qunit.module('metro-bootstrap')

fsPlus.listSync(__dirname)
  .filter(p => path.basename(p, '.png').split('.').pop() === 'expected')
  .map(p => path.basename(p).split('.').shift())
  .forEach(sample => {
    qunit.test(sample, assert => {
      const diff = new BlinkDiff({
        imageAPath: path.resolve(__dirname, `${sample}.html.expected.png`),
        imageBPath: path.resolve(__dirname, `${sample}.html.actual.png`),
        imageOutputPath: path.resolve(__dirname, `${sample}.html.diff.png`),
        thresholdType: BlinkDiff.THRESHOLD_PERCENT,
        threshold: 0
      })

      return new Promise((resolve, reject) => {
        diff.run((error, result) => {
          if (error) {
            reject(error)
          } else {
            assert.ok(diff.hasPassed(result.code), 'Should pass diff test.')
            resolve(result)
          }
        })
      })
    })
  })
