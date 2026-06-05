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