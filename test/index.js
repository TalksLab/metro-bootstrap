const path = require('path')
const qunit = require('qunit')
const BlinkDiff = require('blink-diff')

const samples = [
  'alert',
  'badge',
  'breadcrumb'
]

qunit.module('metro-bootstrap')

samples.forEach(sample => {
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
