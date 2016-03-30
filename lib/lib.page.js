lib = function() {}

//deals with current webpage as a whole
lib.page = function () {}

//printPage() = prints page using JS!
lib.page.printPage = function() {

  //if ensures the browsers supports the window.print() function
  if (parseInt(navigator.appVersion) >= 4) {
    window.print();
  }

}

//getParameter() = access parameters passed to a page
lib.page.getParameter = function(parameterName) {

  var retVal = null;
  var varvals = unescape(location.search.substring(1));

  if(varvals) {

    var searchArray = varvals.split("&");
    var tempArray = [];
    var j = 0;
    var i = 0;

    for(i = 0; i < searchArray.length; i++) {
      tempArray = searchArray[i].split("=");

      var pName = tempArray[0];
      var pVal = tempArray[1];

      if(parameterName == null) {
        if(retVal == null) {
          retVal = new Array();
        }

        retVal[j] = pName;
        retVal[j + 1] = pVal;

        j = j + 2;

      } else {
        if (pName == parameterName) {
          retVal = pVal;
          break;
        }
      }
    }
  }
  return retVal;
}
