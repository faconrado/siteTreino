// 1. Mapeia os elementos do HTML usando os IDs corretos
const btnSalvar = document.getElementById('btn-salvar-treino');
const todosInputsCarga = document.querySelectorAll('.campo-carga');

// 2. EXECUTADO QUANDO A PÁGINA CARREGA
window.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica de recuperação das cargas (LocalStorage) ---
    const dadosSalvos = JSON.parse(localStorage.getItem('meuTreinoCargas')) || {};
    todosInputsCarga.forEach(input => {
        const exercicioId = input.getAttribute('data-id');
        if (dadosSalvos[exercicioId]) {
            input.value = dadosSalvos[exercicioId];
        }
    });

    // --- LÓGICA DO DROPDOWN COMPATÍVEL COM O SEU CSS ---
    const todosTitulos = document.querySelectorAll('.titulo-treino');

    todosTitulos.forEach(titulo => {
        titulo.addEventListener('click', () => {
            // Alterna a classe ativa no título (Gira a seta no CSS)
            titulo.classList.toggle('ativo');

            // Percorre os próximos elementos irmãos para achar a tabela correspondente
            let tabelaCorrespondente = titulo.nextElementSibling;
            while (tabelaCorrespondente && !tabelaCorrespondente.classList.contains('tabela-treino')) {
                tabelaCorrespondente = tabelaCorrespondente.nextElementSibling;
            }

            // Ativa a classe .mostrar para bater de frente com o !important do CSS
            if (tabelaCorrespondente) {
                tabelaCorrespondente.classList.toggle('mostrar');
            }
        });
    });
});

// 3. SALVAR: Guarda o valor digitado ao clicar no botão
if (btnSalvar) {
    btnSalvar.addEventListener('click', () => {
        const dadosParaSalvar = {};
        todosInputsCarga.forEach(input => {
            const exercicioId = input.getAttribute('data-id');
            dadosParaSalvar[exercicioId] = input.value;
        });
        localStorage.setItem('meuTreinoCargas', JSON.stringify(dadosParaSalvar));
        alert('Treino completo salvo com sucesso!');
    });
}
