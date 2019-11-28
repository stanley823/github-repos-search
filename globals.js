var HtmlReporter = require('nightwatch-html-reporter')
var reporter = new HtmlReporter({
  openBrowser: false,
  uniqueFilename: false,
  separateReportPerSuite: false,
  reportsDirectory: __dirname + '/reports/'
})

module.exports = {
  reporter: reporter.fn,
  beforeEach (done) {
    done()
  },
  before (done) {
    done()
  },
  afterEach (done) {
    done()
  },
  after (done) {
    done()
  }
}
