function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "header__nav") {
    x.className += " responsive";
  } else {
    x.className = "header__nav";
  }
}


function validationForm() {
  var frsname = document.forms["contactForm"]["firstName"];
  var lstname = document.forms["contactForm"]["lastName"];
  var phone = document.forms["contactForm"]["phone"];
  var service = document.forms["contactForm"]["slctService"];

  if (frsname.value == "") {
    frsname.placeholder = "Please enter your first name";
    frsname.classList.add("error");
    frsname.focus();
    return false;
  }

  if (lstname.value == "") {
    lstname.placeholder = "Please enter your last name";
    lstname.classList.add("error");
    lstname.focus();
    return false;
  }

  if (phone.value == "") {
    phone.placeholder = "Please enter your telephone number";
    phone.classList.add("error");
    phone.focus();
    return false;
  }
  var regex = /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/;
  var OK = regex.exec(phone.value);
  if (!OK) {
    phone.value = "";
    phone.placeholder = "Please enter valid telephone number";
    phone.classList.add("error");
    phone.focus();
    return false;
  }

  if (service.selectedIndex < 1) {
    service.classList.add("error");
    service.focus();
    return false;
  }

  return true;
}
