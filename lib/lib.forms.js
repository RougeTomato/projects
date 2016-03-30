lib = function() {}

lib.form = function () {}

//formToXML()  = generate XML form from <form>
lib.form.formToXML = function (form, rootElement) {

  if (form == null) {
    return null;
  }

  if (rootElement == null) {
    return null;
  }

  var outXML = "<" + rootElement + ">";

  for (var i = 0 ; i < form.length; i++) {

    var ofe = form[i];
    var ofeType = ofe.type.toUpperCase();
    var ofeName = ofe.name;
    var ofeValue = ofe.value;

    if (ofeType == "TEXT" || ofeType == "HIDDEN" || ofeType == "PASSWORD" || ofeType == "SELECT-ONE" || ofeType == "TEXTAREA") {
      outXML += "<" + ofeName + ">" + ofeValue + "</" + ofeName + ">";
    }

    if (ofeType == "RADIO" && ofe.checked == true) {
      outXML += "<" + ofeName + ">" + ofeValue + "</" + ofeName + ">";
    }

    if (ofeType == "CHECKBOX") {
      if (ofe.checked == true) {
        cbval = "true";
      } else {
        cbval = "false";
      }
      outXML += "<" + ofeName + ">" + cbval + "</" + ofeName + ">";
    }

    outXML += "";

  }

  outXML += "</" + rootElement + ">";
  return outXML;

}

//selectLocateOption() = find, select  a specified option ins <select> field
lib.form.selectLocateOption = function (select, value, find, caseInsensitive) {

  if (select == null || value == null || value = "" || caseInsensitive == null || find == null) {
    return false;
  }

  if (caseInsensitive) {
    value = value.toLowerCase()
  }

  var found = false;

  for (var i = 0; (i < select.length) && !found; i++) {

    var nextVal = select.options[i].value;

    if (caseInsensitive) {
      nextVal = nextVal.toLowerCase();
    }

    if (nextVal == value) {

      found = true;

      if (!find) {

        select.options[i].selected = true;
      }

    }

  }

  return found;

}

//selectSelectAll() = select all options in <select>
lib.form.selectSelectAll = function(select) {

  if (select == null || !select.options || select.options.length == 0) {
    return false;
  }

  for (var i = 0; i < select.options.length; i++) {
    select.options[i].selected = true;
  }

}
