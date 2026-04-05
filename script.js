const registerBtn = document.getElementById("goRegister");

if(registerBtn){
registerBtn.addEventListener("click", function(){

window.location.href="registration.html";

});
}

const loginBtn = document.getElementById("goLogin");

if(loginBtn){
loginBtn.addEventListener("click", function(){

window.location.href="index.html";

});
}