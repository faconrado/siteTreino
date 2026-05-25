const botao = document.getElementById("Entrar");
const campoUsername = document.getElementById("username");
const campoPassword = document.getElementById("password");

botao.addEventListener("click", () => {

    const login = campoUsername.value;
    const senha = campoPassword.value;
    const loginUser = login.toUpperCase();
    if (loginUser === "FABRIZZIO" && senha === "32665590"){
        window.location.href = "treinoFabrizzio.html";
        alert("Login bem-sucedido! Bem-vindo, Fabrizzio!");
    } else {
        alert("Login ou senha incorretos. Tente novamente.");
    }

});