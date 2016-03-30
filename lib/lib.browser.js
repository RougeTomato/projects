lib = function() {}

//lib.browser pkg
lib.browser = function () {}

//getBrowserIdentity function - returns browser name and version
lib.browser.getBrowserIdentity = function() {
  return navigator.appName + " " + navigator.appVersion;
