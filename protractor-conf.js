exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  //seleniumServerJar: '/home/lando/workspace/CANARIE/angularJS/angular-phonecat/node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
  //allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

 //chromeDriver: '/home/lando/local/lib/node_modules/protractor/selenium/chromedriver',

  capabilities: {
    'browserName': 'chrome'

  },

  //chromeOnly: true,

  //baseUrl: 'http://localhost:8000/',

  //framework: 'jasmine',

  jasmineNodeOpts: {
    //defaultTimeoutInterval: 10000
    showColors: true
  }
};