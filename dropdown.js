// 1. Mapeia os elementos do HTML usando os IDs corretos
const btnSalvar = document.getElementById('btn-salvar-treino');
const todosInputsCarga = document.querySelectorAll('.campo-carga');

// 2. CARREGAR E CONFIGURAR DROPDOWNS: Quando a página abrir
window.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de recuperação do LocalStorage (Sua lógica original) ---
    const dadosSalvos = JSON.parse(localStorage.getItem('meuTreinoCargas')) || {};
    todosInputsCarga.forEach(input => {
        const exercicioId = input.getAttribute('data-id');
        if (dadosSalvos[exercicioId]) {
            input.value = dadosSalvos[exercicioId];
        }
    });

    // --- NOVA LÓGICA DO DROPDOWN ---
    const todosTitulos = document.querySelectorAll('.titulo-treino');

    todosTitulos.forEach(titulo => {
        titulo.addEventListener('click', () => {
            // Adiciona/remove a classe ativa para girar a seta
            titulo.classList.toggle('ativo');

            // Seleciona o elemento que está logo após o <p> clicado (a div .conteudo-treino)
            const conteudo = titulo.nextElementSibling;

            // Verifica se o próximo elemento realmente é o contêiner de exercícios
            if (conteudo && conteudo.classList.contains('conteudo-treino')) {
                // Abre ou fecha o bloco correspondente
                conteudo.classList.toggle('mostrar');
            }
        });
    });
});

// 3. SALVAR: Ao clicar no botão, guarda o valor digitado (Sua lógica original)
btnSalvar.addEventListener('click', () => {
    const dadosParaSalvar = {};
    todosInputsCarga.forEach(input => {
        const exercicioId = input.getAttribute('data-id');
        dadosParaSalvar[exercicioId] = input.value;
    });
    localStorage.setItem('meuTreinoCargas', JSON.stringify(dadosParaSalvar));
    alert('Treino completo salvo com sucesso!');
});
