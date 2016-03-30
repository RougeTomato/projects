lib = function() {}

lib.dom = function () {}

//layerCenterH()function = centers the div horizontally
lib.dom.layerCenterH = function(object) {
  var lca;
  var lcb;
  var lcx;
  var iebody;
  var dsocleft;

  if (window.innerWidth) {
    lca = window.innerWidth;
  } else {
    lca = document.body.clientWidth;
  }

  lcb = object.offsetWidth;
  lcx = (Math.round(lca / 2)) - (Math.round(lcb / 2));
  iebody = document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
  dsocleft = document.all ? iebody.scrollLeft : window.pageXOffeset;
  object.style.left = lcx + dsocleft + "px";
}

//layerCenterV() = centers the div vertically
lib.dom.layerCenterV = function(object) {
  var lca;
  var lcb;
  var lcy;
  var iebody;
  var dsoctop;

  if (window.innerHeight) {
    lca = window.innerHeight;
  } else {
    lca = document.body.clientHeight;
  }

  lcb = object.offsetHeight;
  lcy = (Math.round(lca / 2)) - (Math.round(lcb / 2))
  iebody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
  dsoctop = document.all ? iebody.scrollTop : window.pageYoffset;
  object.style.top = lcy + dsoctop + "px";
}

//execScripts() = executes <script> tags on Ajax requests
lib.dom.execScripts = function(text) {

  var si = 0;\

  while(true) {
    //finding opening script tags
    var ss = text.indexOf("<" + "script" + ">", si);

    if (ss == -1) {
      return false;
    }

    //finding the closing script tags
    var se = text.indexOf("<" + "/" + "script" + ">", ss);

    if (se == -1) {
      return false;
    }

    //jump ahead 9 chars, after </script> tag
    si = se + 9;

    //get content in between and execute it
    var sc = text.substring(ss + 8, se);
    eval(sc);
  }

}

//getDOMElements() = get reference to a batch of DOM elements
lib.dom.getDOMElements = function() {

  if (arguments.length == 0 ) {
    return null;
  }

  if (arguments.length == 1) {
    return document.getElementById(arguments[0]);
  }

  var elems = [];
  for (var i = 0; i < arguments.length; i++) {
    elems.push(document.getElementById(arguments[i]));
  }

  return elems;

}
