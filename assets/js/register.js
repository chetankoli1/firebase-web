const mAuth  = firebase.auth()
const realdb = firebase.database()
//const firestoredb = firebase.firestore()

function newuser(){
    let fname = document.getElementById('fname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('confirmpassword').value

    if(validateFullname(fname) == false){
        alert("Invalid Name")
        return
    }else if(validateEmail(email) == false){
        alert("Invalid Email")
        return
    }else if(validatePassword(password) == false){
        alert("Invalid Passowrd")
        return
    }else if(password != cpassword){
        alert("Conform Passowrd Can't matched")
        return
    }else{
        mAuth.createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                let user = response.user
                let ref = realdb.ref()
                let userData = {
                    fullname : fname,
                    email : email
                }
                ref.child("User/" + user.uid).set(userData)
                .then((resp) => {
                    window.location.href = "./index.html"
                }).catch((err) =>{
                    let errorCode = err.code;
                    let errorMessage = err.message;
                    alert("realtime: "+errorMessage)

                })
            })
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage)
            });
    }
}


function validateFullname(fullname){
    if(fullname.length<3){
        return false;
    } else{
        return true;
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