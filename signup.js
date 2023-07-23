function validateForm() {
    let x = document.forms["form"]["email"]["psw"]["psw-repeat"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}
