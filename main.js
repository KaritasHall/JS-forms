/* Importing classes and id from html */
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

/* Variables for the html id and classes */

let username = id("username"),
email = id("email"),
password = id("password"),
phone = id("phone"),
form = id("form")

errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

/* Event listener for submit.*/
form.addEventListener("submit", (event) => {
event.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
    engine(phone, 3, "Phone number cannot be blank")
});

/* Function that will get called in the event listener.It targets id, classes (serial) and print a message inside .error class.
 We want an error message when user submist a blank form and trigger failure icons.
 If user fills in the inputs and submits we want success incons to be triggered*/
let engine = (id, serial, message) => {
    // trim() will remove extra white space from the user input value
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

function isChecked() {
    if(document.getElementById("my-checkbox").checked){
        document.getElementById("message").textContent = "Subscribed!";
    }
    else {
        document.getElementById("message").textContent = "I want the newsletter!";
    }
}

