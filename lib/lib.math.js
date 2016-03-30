lib = function() {}

lib.math = function () {}

//genRandomNumber() = generate random number at a specified range
lib.math.genRandomNumber = function (min, max) {

  if (min > max) {
    return 0;
  }

  return min + (max - min) * Math.random();

}

//genRandomWholeNumber() = like genRandomNumber() but returns a whole integer
lib.math.genRandomWholeNumber = function (min, max) {

  if (min > max) {
    return 0;
  }

  return Math.round(min + (max - min) * Math.random());

}
