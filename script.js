// 1. Mapeia os elementos do HTML usando os IDs corretos
const btnSalvar = document.getElementById('btn-salvar-treino');
const todosInputsCarga = document.querySelectorAll('.campo-carga'); // Seleciona todos os inputs de carga

// 2. CARREGAR: Quando a página abrir, recupera o peso salvo e joga no input
window.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = JSON.parse(localStorage.getItem('meuTreinoCargas')) || {}; // Recupera o objeto salvo ou inicia um vazio

    // Passa de input em input e preenche com o valor salvo, se existir
    todosInputsCarga.forEach(input => {
        const exercicioId = input.getAttribute('data-id'); // Pega o ID específico do input
        if (dadosSalvos[exercicioId]) { // Se tiver um valor salvo para esse exercício
            input.value = dadosSalvos[exercicioId]; // Preenche o input com o valor salvo
        }
    });
});

// 3. SALVAR: Ao clicar no botão, guarda o valor digitado no input do peso
btnSalvar.addEventListener('click', () => {
    const dadosParaSalvar = {}; // Objeto para guardar os dados a serem salvos
    // Passa por cada input de carga e guarda o valor no objeto, usando o ID como chave
    todosInputsCarga.forEach(input => {
        const exercicioId = input.getAttribute('data-id'); // Pega o ID específico do input
        dadosParaSalvar[exercicioId] = input.value; // Guarda o valor do input no objeto
    });

    localStorage.setItem('meuTreinoCargas', JSON.stringify(dadosParaSalvar));

    // Feedback visual para saber se deu certo.
    alert('Treino completo salvo com sucesso!');
});
