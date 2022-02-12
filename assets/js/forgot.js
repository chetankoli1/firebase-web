const forgotAuth = firebase.auth()

function forgotpassword() {
    let email = document.getElementById('email').value

    if(validateEmail(email) == false){
        alert("Invalid Email")
        return
    }else{
        forgotAuth.sendPasswordResetEmail(email).then(function() {
            // Email sent.
            alert("Email Has sent please check your mailbox")
          }).catch(function(error) {
            // An error happened.
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage)
          });
    }
}

function validateEmail(email){
  if(email.length<3){
      return false;
  } else{
      return true;
  }
}