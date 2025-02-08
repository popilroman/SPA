document.addEventListener("DOMContentLoaded", () => {
    const EMAIL = "admin@uust.su";
    const PASSWORD = "admin";

    var name;


    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const authButton = document.getElementById("authBtn");

    const authCheck = () => {
        let email = emailInput.value;
        let password = passwordInput.value;
        if (email == EMAIL && password == PASSWORD) {
            window.location.href = "../index.html";
        } else if (!email || !password){
            alert("Пожалуйста, заполните все поля");
        } else {
            alert("Введены неверные данные");
        }
        
        console.log(email + " " + password);
    };

    authButton.addEventListener("click", () => {
        authCheck();
    });

});