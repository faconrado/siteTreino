// 1. Mapeia os elementos do HTML usando os IDs corretos
const inputPeso = document.getElementById('Kg');
const btnSalvar = document.getElementById('btn-salvar-treino');

// 2. CARREGAR: Quando a página abrir, recupera o peso salvo e joga no input
window.addEventListener('DOMContentLoaded', () => {
    const savedPeso = localStorage.getItem('peso');
    if (savedPeso) {
        inputPeso.value = savedPeso;
    }
});

// 3. SALVAR: Ao clicar no botão, guarda o valor digitado no input do peso
btnSalvar.addEventListener('click', () => {
    localStorage.setItem('peso', inputPeso.value);

    // Feedback visual para saber se deu certo.
    alert('Treino salvo com sucesso!');
});
