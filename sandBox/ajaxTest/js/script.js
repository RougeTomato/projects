function ajax_post() {

  //creating new XMLHttpRequest object
  var hr = new XMLHttpRequest();

  var url = "http://sandbox.io/ajaxTest.php";
  var fn = document.getElementById("firstName").value;
  var ln = document.getElementById("lastName").value;
  var vars = "firstname="+fn+"&lastname="+ln;

  //XMLHttpRequest.open() accepts 3 parameters XMLHttpRequest("GET" or "POST", "url" the server file location eg. "localhost/ajaxTest.php", true or false - true if ajax)
  hr.open("POST", url, true);

  //set content type header information for sending URL encoded vars in request
  //To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
  //XMLHttpRequest.setRequestHeader() accepts 2 parameters: "Content-type", "application/x-www-form-urlencoded"
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

  //access the onreadystatechange even for the XMLHttpRequest object
  hr.onreadystatechange = function () {

    if(hr.readyState == 4 && hr.status == 200) {
      var return_data = hr.responseText;

      document.getElementById("status").innerHTML = return_data;
    }

  }

  //actual sending of data
  hr.send(vars);
  document.getElementById("status").innerHTML = "loading";

}
