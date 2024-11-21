document.getElementById("LI_here").onclick=()=>{ 
    document.getElementById("login-container").classList.remove("hidden-form")
    document.getElementById("signup-form").classList.add("hidden-form")
    document.getElementById("login-container").style.marginTop = "50px";
}
document.getElementById("CA_here").onclick=()=>{ 
    document.getElementById("login-container").classList.add("hidden-form")
    document.getElementById("signup-form").classList.remove("hidden-form")
}

function mySignUp(){
    const password = document.getElementById('password').value;
    const c_password = document.getElementById('c_password').value; 

    if (password !== c_password) {
        document.getElementById('message').textContent = 'Passwords do not match, input correct password!';
    } else {
        window.location.href = "homepage.html";
    }
}
function myLogin() { 
    const password = document.getElementById('password2').value;
    const c_password = document.getElementById('c_password2').value; 

    if (password !== c_password) {
        document.getElementById('message2').textContent = 'Incorrect password. Please try again!';
    } else {
        window.moveTo('homepage.html');
    }
}
