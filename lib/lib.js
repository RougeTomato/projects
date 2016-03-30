lib = function () {}

//lib.ui
lib.ui = function() {}
lib.ui.alerts = function() {}

//messageDisplayer - displays alertbox for msg -  mainly for testing
lib.ui.alerts.messageDisplayer = function(msg) {
  alert("msg= " + msg);
}


//lib.array
lib.array = function () {}

//copyArray() copy contents from one array to another
lib.array.copyArray = function(source, destination) {
  for(var i = 0; i < source.length; i++) {
    destination.push(source[i]);
  }
  return destination;
}

//findInArray() find element in array
lib.array.findInArray = function(array, value) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

//arrayAverage() function - calculates the average of an array
//!!!all elements of the array must be an integer!!!
lib.array.arrayAverage = function(array) {
  var accumulator = 0;
  for(var i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  return accumulator/array.length;
}


//lib.browser pkg
lib.browser = function () {}

//getBrowserIdentity function - returns browser name and version
lib.browser.getBrowserIdentity = function() {
  return navigator.appName + " " + navigator.appVersion;
}


//lib.datetime pkg
lib.datetime = function () {}

//isLeapYear() function - checks if year is a leap year
