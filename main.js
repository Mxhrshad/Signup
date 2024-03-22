let password = document.querySelector("#password");
let confirmpass = document.querySelector("#confirm-password");
let error = document.querySelector("#error")

confirmpass.addEventListener("input", function(){
    if (password.value != null || password.value != ""){
        if (password.value !== confirmpass.value){
            error.style.display = "block";
            confirmpass.style.outlineColor = "red"
            confirmpass.style.borderColor = "red"
        } else{
            error.style.display = "none";
            confirmpass.style.outlineColor = "#5e81ac"
            confirmpass.style.borderColor = "#E5E7EB"
        }
    }
})

password.addEventListener("input", function(){
    if (password.value != null || password.value != ""){
        if (password.value !== confirmpass.value){
            error.style.display = "block";
            confirmpass.style.outlineColor = "red"
            confirmpass.style.borderColor = "red"
        } else{
            error.style.display = "none";
            confirmpass.style.outlineColor = "#5e81ac"
            confirmpass.style.borderColor = "#E5E7EB"
        }
    }
})