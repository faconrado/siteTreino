const inputPeso = document.getElementById('Kg');

window.addEventListener('DOMContentLoaded', () => {
    const savedPeso = localStorage.getItem('peso');
    if (savedPeso) {
        inputPeso.value = savedPeso;
    }
});

inputPeso.addEventListener('input', () => {
    localStorage.setItem('peso', inputPeso.value);
});

window.addEventListener('DOMContentLoaded', () => {
    const btnSalvar = document.getElementById('btn-salvar-treino');
    btnSalvar.value = localStorage.getItem('btnSalvarTreino') || '';
});

btnSalvar.addEventListener('click', () => {
    localStorage.setItem('btnSalvarTreino', btnSalvar.value);

    // Feedback visual para saber se deu certo.
    alert('Treino salvo com sucesso!');
});
