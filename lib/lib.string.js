lib = function() {}

//helps work with strings
lib.string = function () {}

//substrCount() = checks how many substrings appear on a string
lib.string.substrCount = function(sourceStr, searchStr) {

  if(sourceStr == null || sourceStr == "" || searchStr == null || searchStr == "") {
    return 0;
  }

  //splits the into an array using searchStr and then returns the value of array.length - 1
  var splitChars = sourceStr.split(searchStr);
  return splitChars.length - 1;

}

//stripChar() = deletes certain characters from string
lib.string.stripChar = function(sourceStr, stripAllow, charList) {

  if(sourceStr == null || sourceStr == "" || stripAllow == null || stripAllow == "" || charList == null || charList == "") {
    return "";
  }

  stripAllow = stripAllow.toLowerCase();
  var outStr = "";
  var i;
  var j;
  var nextChar;
  var keepChar;

  for(i = 0; i < sourceStr.length; i++) {
    nextChar = sourceStr.substr(i, 1);

    if(stripAllow == "allow") {
      keepChar = false;
    } else {
      keepChar = true;
    }

    for(j = 0; j < charList.length; j++) {
      checkChar = charList.substr(j, 1);

      if(stripAllow == "allow" && nextChar == checkChar) {
        keepChar = true;
      }

      if(stripAllow == "strip" && nextChar == checkChar) {
        keepChar = false;
      }

    }

    if(keepChar == true) {
      outStr = outStr + nextChar;
    }

  }

  return outStr;

}

//strContentValid() = checks if string contains only valid chars/invalid chars
lib.string.strContentValid = function (sourceStr, charList, fromExcept) {

  if(sourceStr == null || sourceStr == "" || charList == null || charList == "" || fromExcept == null || fromExcept == "") {
    return false;
  }

  fromExcept = fromExcept.toLowerCase();
  var i;

  if(fromExcept == "from_list") {

    for(i = 0; i < sourceStr.length; i++) {

      if(charList.indexOf(sourceStr.charAt(i)) == -1 ) {
        return false;
      }

    }

    return true;

  }

  if(fromExcept == "not_from_list") {

    for(i = 0; i < sourceStr.length; i++) {

      if(charList.indexOf(sourceStr.charAt(i)) != -1) {
        return false;
      }

    }

    return true;

  }

}


//replace() = replaces all occurence of a substring in a string
lib.string.replace = function(sourceStr, oldStr, newStr) {

  if(sourceStr == (null || "") || oldStr == (null || "") || newStr == (null || "")) {
    return "";
  }

  while(sourceStr.indexOf(oldStr) > -1) {
    sourceStr = sourceStr.replace(oldStr, newStr)
  }

  return sourceStr
}

//leftTrim() = trim spaces from the start of a string
lib.string.leftTrim = function(sourceStr) {

  if(sourceStr == (null || "")) {
    return null;
  }

  for(var i = 0; sourceStr.charAt(i) == " "; i++) { }

  return sourceStr.substring(i, sourceStr.length);

}

//rightTrim() = same is leftTrim() but at the end of a string
lib.string.rightTrim = function(sourceStr) {

  if(sourceStr == (null || " ")) {
    return null;
  }

  for(var i = sourceStr.length -1; sourceStr.charAt(i) == " "; i--) { }

  return sourceStr.substring(0, i + 1);

}

//fullTrim() = L && R trim ()
lib.string.fulltrim = function(sourceStr) {

  if(sourceStr == (null || "")) {
    return null;
  }

  sourceStr = this.leftTrim(sourceStr);
  sourceStr = this.rightTrim(sourceStr);
  return sourceStr;

}

//breakLine() = breaks string into specified length
lib.string.breakLine = function(text, size) {

  if((text || size) == (null || "") || size < 0) {
    return text;
  }

  if(text.length <= size) {
    return text;
  }

  var outArray = [];
  var str = text;

  while(str.length > size) {

    var x = str.substring(0, size);
    var y = x.lastIndexOf(" ");
    var z = x.lastIndexOf("/n");

    if(z != -1) {
      y = z;
    }

    if(y == -1) {
      y = size
    }

    outArray.push(str.substring(0, y));
    str = str.substring(y);

  }

  outArray.push(str);
  return outArray;

}
