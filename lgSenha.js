const botao = document.getElementById("Entrar");

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a página de recarregar
  console.log('Formulário enviado!');
  // Insira aqui a sua lógica de login
  if (botao) {
    botao.addEventListener("click", () => {
        const login = document.getElementById("username").value.trim().toUpperCase();
        const senha = document.getElementById("password").value.trim();

    if (login === "FABRIZZIO" && senha === "32665590"){
        alert("Login bem-sucedido! Bem-vindo, Fabrizzio!");
        window.location.href = "treinoFabrizzio.html";        
    } else if (login === "ANDRESSA" && senha === "Dessadilu"){
        alert("Login bem-sucedido! Bem-vindo, Andressa!");
        window.location.href = "treinoAndressa.html";        
    } else {
        alert("Login ou senha incorretos. Tente novamente.");
    }

});
}
});