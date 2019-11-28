const GLOBALS = './globals.js'
const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver');

const config = {
  "src_folders" : ["tests/e2e/specs"],
  "custom_commands_path": 'tests/e2e/command',
  "page_objects_path": ["tests/e2e/pages"],
  "globals_path": GLOBALS,
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path
    }
  },
  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },
  "test_workers" : {
    "enabled": true,
    "workers": "auto"
  },
  "test_settings" : {
    "default" : {
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : false,
        "path" : ""
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "launch_url": "http://localhost:3002",
      "desiredCapabilities": {
        "browserName": "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true,
        "chromeOptions": {
          w3c: false,
          "args": ["disable-web-security", "ignore-certificate-errors", "headless"]
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true,
        "chromeOptions": {
          w3c: false,
          "args": ["disable-web-security", "ignore-certificate-errors", "headless"]
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true,
        "moz:firefoxOptions": {
          "args": ["headless"]
        }
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    }
  }
}

module.exports = config
