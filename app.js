import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwpwwFvfbKyCEaBJU0THlGIvXOU5fiQDY",
    authDomain: "social-app-1c232.firebaseapp.com",
    projectId: "social-app-1c232",
    storageBucket: "social-app-1c232.appspot.com",
    messagingSenderId: "988778365588",
    appId: "1:988778365588:web:cf84878497dc56cca7aa81"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const firstName = document.getElementById('#firstname');
const surName = document.getElementById('#surname');



const signUpBtn = document.getElementById('signupbtn');

let signUp = document.getElementById("container");
let logIn = document.getElementById("logInContainer")
signUp.style.display = "block"
logIn.style.display = "none";

signUpBtn.addEventListener('click', () => {

    const email = document.getElementById('inputEmail3').value;
    const password = document.getElementById('inputPassword3').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("User mil giya hai " + user);
             signUp.style.display = "none";
             logIn.style.display = "block";
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.error("Error agiya hai ==>", errorCode, errorMessage);
        });
});

//  Log in 

//  logIn = document.getElementById("logInContainer").style.display = "block";


let AnAccount = document.getElementById('allreadyAnAccount');
AnAccount.addEventListener('click', () => {
     signUp.style.display = "none";
      logIn.style.display = "block";
})

let loginBtn = document.getElementById('loginBtn3');

loginBtn.addEventListener('click', () => {

    const loginEmail = document.getElementById('inputEmail3');
    console.log("Ye raha login email." ,loginEmail);
    const loginPassword = document.getElementById('inputPassword3');

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User mil giya hai ", user);

            location.href = './dashboard/dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error agiya hai ", errorCode, errorMessage);
            location.href = '../dashboard/dashboard.html';
        });

});


const createBtn = document.getElementById('createBtn');

createBtn.addEventListener('click', () => {
    signUp.style.display = 'block'
    logIn.style.display = 'none';
})




