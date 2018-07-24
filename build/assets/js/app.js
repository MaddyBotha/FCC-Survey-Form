window.sr=ScrollReveal(),sr.reveal("h1",{delay:0,duration:500,origin:"left",distance:"80px"});


// form-validation
function validateForm () {
  var x = document.forms["survey-form"]["name"]["email"]["number"].value;
  if (x == "") {
    alert("Please enter a Name");
    return false;
  }
};
