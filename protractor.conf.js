// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//require('ts-node/register');

exports.config = {
  useAllAngular2AppRoots: true,
  exclude: [],
  allScriptsTimeout: 110000,
  onPrepare: function () {
    const globals = require('protractor');
    const browser = globals.browser;
    browser.ignoreSynchronization = true;
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:4200/',
  directConnect: true,

  capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
          'args': ['show-fps-counter=true']
      }
  },
  specs: [
    'e2e/new-game/new-game.feature',
    'e2e/**/*.feature'
  ],
  cucumberNodeOpts: {
    isVerbose: true
  },
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "pretty",
    require: [
      'e2e/**/*.page.ts',
      'e2e/**/*.steps.ts'
    ]
  }
};
