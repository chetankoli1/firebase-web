const loginAuth = firebase.auth()

function loginuser() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(validateEmail(email) == false){
        alert("Invalid Email")
        return
    }else if(validatePassword(password) == false){
        alert("Invalid Passowrd")
        return
    }else{
        loginAuth.signInWithEmailAndPassword(email, password)
            .then(function (response) {
                window.location.href = "./index.html"
            })
            .catch(function (error) {
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

function validatePassword(password){
    if(password.length<6){
        return false;
    } else{
        return true;
    }
}