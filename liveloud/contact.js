var $ = function (id) {
	return document.getElementById(id);
}
var contactMe = function () {
	var firstName = $("first_name").value;
	var lastName = $("last_name").value;
	var isValid = true;
	
	if (firstName == "") {
		$("first_name_error").firstChild.nodeValue = 
			"Field Required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}				
	
		if (lastName == "") {
		$("last_name_error").firstChild.nodeValue = 
			"Field Required.";
		isValid = false;
	} else {
		$("last_name_error").firstChild.nodeValue = "";
	}
	
	if ($("email_address").value == "") {
		$("email_address_error").firstChild.nodeValue =
			"Field Required.";
		isValid = false;
	} else {
		$("email_address_error").firstChild.nodeValue = "";
	}
	
	if (isValid) {
		$("contact_me").submit();
	}			 	
}
window.onload = function () {
	$("contact_me").onclick = contactMe;
	$("email_address").focus();
}		