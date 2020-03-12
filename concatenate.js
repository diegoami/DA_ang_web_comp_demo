const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/awd/runtime-es5.js',
    './dist/awd/polyfills-es5.js',
    './dist/awd/main-es5.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/analytics-counter.js');
  await fs.copyFile('./dist/awd/styles.css', 'elements/styles.css')

})()
