module.exports = {
  commands: [{
    pageInit () {
      this
        .assert.title('Github Repos - Dcard Take Home Test')
        .waitForElementPresent('@header', 'Header pressent.')
        .waitForElementPresent('@filter', 'Filters block pressent.')
        .waitForElementPresent('@search', 'Search input pressent.')
        .verify.value('@search', '', 'value of search input is empty.')
        .waitForElementPresent('@empty', 'empty block pressent.')
        .waitForElementNotVisible('@loading', 1000, 'loading block hidden.')
      return this
    },
    searching (keyword) {
      this
        .waitForElementPresent('@search', 'Search input pressent.')
        .clearValue('@search')
        .setValue('@search', keyword)
        .verify.value('@search', keyword)
      return this
    },
    listShow () {
      this
        .waitForElementNotPresent('@empty', 'empty block hidden.')
        .waitForElementVisible('@loading', 'loading block showing.')
        .waitForElementNotVisible('@loading', 'loading block hidden.')
        .waitForElementPresent('@list', 'list block pressent.')
        .expect.elements('@listItem').count.to.equal(30)
      return this
    },
    scrollToBottom (number) {
      this
        .api.execute(function(res) {
          window.scrollTo({
              top: document.documentElement.offsetHeight,
              behavior: "smooth"
          })
        }, [])
      this
        .waitForElementVisible('@loading', 'loading block showing.')
        .waitForElementNotVisible('@loading', 'loading block hidden.')
        .expect.elements('@listItem').count.to.equal(number)
      return this
    },
    scrollToBottomWithErr () {
      const that = this
      this
        .api.execute(function () {
          window.scrollTo({
              top: document.documentElement.offsetHeight,
              behavior: "smooth"
          })
        }, [])
      this
        .api.pause(3000)
        .getAlertText(function (object) {
          that.assert.equal(object.value, '查詢次數超出限制，請稍後再試')
        })
      return this
    },
    getRateLimit () {
      const that = this
      this
        .waitForElementPresent('@limitRemaining', 'Rate limit pressent')
        .getText('@limitRemaining', function (result) {
          const limit = result.value
          for (let index = 0; index < limit; index++) {
              that.scrollToBottom(30 + 30 * (index + 1))
          }
          that.scrollToBottomWithErr()
        })
      return this
    },
  }],
  elements: {
    header: 'header',
    title: 'header > div > h1',
    filter: 'aside',
    list: '#root > div > main > section > ul',
    listItem: '#root > div > main > section > ul > li',
    search: 'input[name=search]',
    limitRemaining: '#root > div > main > aside > div.filters__info > p:nth-child(3) > span',
    info: 'div.filters__info',
    empty: 'div.empty',
    loading: 'div.loading'
  }
}