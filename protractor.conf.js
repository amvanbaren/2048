// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

require('ts-node/register');

exports.config = {
  useAllAngular2AppRoots: true,
  exclude: [],
  allScriptsTimeout: 110000,
  onPrepare: function () {
    browser.ignoreSynchronization = true;
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:4200/',
  directConnect: true,

  capabilities: {
      'browserName': 'chrome'
  },
  specs: [
    'e2e/**/*.feature'
  ],
  cucumberOpts: {
    require: [
      'e2e/**/*.steps.ts'
    ],
    format: 'pretty'
  }
};
