lib = function() {}

//working with JS at a fundamental language level
lib.lang = function () {}

//copyProperties() = copy properties from one object to another
lib.lang.copyProperties = function (srcObj, destObj, override) {

  var prop;

  for (prop in srcObj) {

    if (override || !destObj[prop]) {
      destObj[prop] = srcObj[prop];
    }
  }

  return destObj;

}
