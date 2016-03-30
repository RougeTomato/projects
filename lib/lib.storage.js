lib = function() {}

//deals with client-side storage
lib.storage = function() {}

//setCookie() = creates cookie
lib.storage.setCookie = function(name, value, expiry) {

  if(typeof expiry == "Date") {
    expiry = expiry.toGMTString();
  }

  document.cookie = name + "=" + escape(value) + "; expires=" + expiry;

}

//getCookie() = get the value of a cookie
lib.storage.getCookie = function(name) {

  var docCookies = document.cookie;
  var cIndex = docCookies.indexOf(name + "=");

  if(cIndex == -1) {
    return null;
  }

  cIndex = docCookies.indexOf("=", cIndex);

  if(endStr == -1) {
    endStr = docCookies.length;
  }

  return unescape(docCookies.substring(cIndex, endStr));

}

//deleteCookie() = deletes a cookie
lib.storage.deleteCookie = function(name) {

  if(this.getCookie(name)) {

    this.setCookie(name, null, "Thu, 01-Jan-1970 00:00:01 GMT")
    
  }

}
