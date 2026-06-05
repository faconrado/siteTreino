const inputPeso = document.getElementById('Kg');
const btnSalvar = document.getElementById('btn-salvar-treino');

window.addEventListener('DOMContentLoaded', () => {
    const savedPeso = localStorage.getItem('peso');
    if (savedPeso) {
        inputPeso.value = savedPeso;
    }
});

btnSalvar.addEventListener('click', () => {
    localStorage.setItem('peso', inputPeso.value);

    // Feedback visual para saber se deu certo.
    alert('Peso salvo com sucesso!');
});
