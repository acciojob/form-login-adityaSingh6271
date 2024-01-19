function getFormvalue() {
  // Get the form element
  var form = document.getElementById("form1");

  // Get the values of the first and last name input fields
  var firstName = form.fname.value;
  var lastName = form.lname.value;

  // Display the concatenated values using alert
  alert(firstName + " " + lastName);

  // Prevent the default form submission
  return false;
}