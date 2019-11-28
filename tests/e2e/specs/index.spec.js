module.exports = {
  // test case 開始之前使用showBrowser command
  beforeEach: (browser) => {
    browser
      .ShowBrowser()
  },
  'Page Init': browser => {
    browser
      .page.index()
        .pageInit()
      .end()
  },
  'Searching Something': browser => {
    browser
      .page.index()
        .searching('react')
        .listShow()
    .end()
  },
  'Infinite Scroll Loading': browser => {
    browser
      .page.index()
        .searching('react')
        .listShow()
        .scrollToBottom(60)
        .scrollToBottom(90)
    .end()
  },
  'Rate Limit': browser => {
    browser
      .page.index()
        .searching('react')
        .listShow()
        .getRateLimit()
    .end()
  },
  // 每一則test case 最終階段皆關閉
  afterEach (browser, done) {
    done()
  },
  // 最終關閉自動化瀏覽器
  after (browser, done) {
    browser.end(() => {
      done()
    })
  }
}

