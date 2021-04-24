const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validate(){
    const emailEl = document.getElementById("email").value;
    const email = document.getElementById("email");
    if(re.test(emailEl)){
        document.getElementById("error").innerHTML = "Good";
        email.classList.remove("icon")
        email.style.borderColor = "silver";
        email.style.borderWidth = "1px";
    }
    else{
        document.getElementById("error").innerHTML = "Please provide a valid email";
        email.classList.add("icon")
        email.style.borderColor = "red";
        email.style.borderWidth = "2px";
    }
}