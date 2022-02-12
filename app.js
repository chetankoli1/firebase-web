const firebaseConfig = {
    apiKey: "AIzaSyAnx9v070af46ROxoGUQLMTgI8ELx8Ukw0",
    authDomain: "fir-fcca8.firebaseapp.com",
    projectId: "fir-fcca8",
    storageBucket: "fir-fcca8.appspot.com",
    messagingSenderId: "111654648496",
    appId: "1:111654648496:web:cc516d6498fafc6655d975",
    measurementId: "G-6467R0X85S"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const firestoredb = firebase.firestore();

function register(){

let email = document.getElementById("editEmail").value
let password = document.getElementById("editPassword").value

    if(emailValidator(email) == false || passwordValidator(password) == false){
        alert("some fields are empty")
        return
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                var dbref = database.ref();
                var data = {
                    userEmail : user.email
                }
                //dbref.child("User/" + user.uid).set(data);
                firestoredb.collection("Users").document(user.uid).add(data);
                alert('user added')
                })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }
}

function login(){
let email = document.getElementById("editEmail").value
let password = document.getElementById("editPassword").value
if(emailValidator(email) == false && passwordValidator(password) == false){
    alert("some fields are empty")
    return
}else{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        var user = userCredential.user;
        alert("user login with "+ user.uid)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}

}

function emailValidator(email){
    if(email.lenght > 3){
        return false;
    }else{
        return true;
    }
}

function passwordValidator(password){
    if(password.lenght > 3){
        return false;
    }else{
        return true;
    }
}
