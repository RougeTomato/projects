lib = function() {}

lib.debug = function () {}

//enumerateProperty() function - enumerates object properties
lib.debug.enumerateProperty = function(object) {
  var property = "";
  var i;

  for (i in object) {
    property += i + " = " + object[i] + "\n";
  }
  alert(property);
}
