lib = function() {}

lib.datetime = function () {}

//isLeapYear() - leap year check
lib.datetime.isLeapYear = function(year) {
  if((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

//getNumberOfDaysInMonth() - self explanatory
lib.datetime.getNumberOfDaysInMonth = function (month, year) {
  var month = month-1;
  var leapYear = this.isLeapYear(year);

  if(leapYear) {
    leapYear = 1;
  } else {
    leapYear = 0;
  }
  if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else if (month == 1) {
    return 28 + leapYear;
  } else {
    return 31;
  }
}
