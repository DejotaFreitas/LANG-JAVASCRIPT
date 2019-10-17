<html>
<head>
<title>Test this</title>
</head>
<body>
<form name="testForm" action="" method="">
First Name: <input type="text" name="fname" id="fname" /><br />
Last Name: <input type="text" name="lname" id="lname" /><br />
<input type="button" value="Submit Form" onclick="postStuff();" />
</form>
<div id="status"></div>

<script>
function postStuff(){
// Create our XMLHttpRequest object
var hr = new XMLHttpRequest();
// Create some variables we need to send to our PHP file
var url = "xhr.php";
var fn = document.getElementById("fname").value;
var ln = document.getElementById("lname").value;
var vars = "firstname="+fn+"&lastname="+ln;
hr.open("POST", url, true);
hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// Access the onreadystatechange event for the XMLHttpRequest object
hr.onreadystatechange = function() {
    console.log(hr);

    if(hr.readyState == 4 && hr.status == 200) {
        var return_data = hr.responseText;
        document.getElementById("status").innerHTML = return_data;
    }
}
// Send the data to PHP now... and wait for response to update the status div
hr.send(vars); // Actually execute the request
document.getElementById("status").innerHTML = "processing...";
}
</script>
</body>
</html>
