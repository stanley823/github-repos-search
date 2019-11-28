const EventEmitter = require('events')

class ShowBrowser extends EventEmitter {
  command () {
    this.api
      .maximizeWindow()
      .url(this.api.launch_url)
      .waitForElementPresent('#root', 5000, 'Page Loaded')
    this.emit('complete')
    return this
  }
}

module.exports = ShowBrowser
