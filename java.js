function adicionarNumero(num) {
    const tela = document.getElementById('tela');
    tela.value += num;
}

function adicionarOperador(operador) {
    const tela = document.getElementById('tela');
    const valorAtual = tela.value;

    // Evita que o usuário insira dois operadores seguidos
    if (valorAtual !== '' && !isOperador(valorAtual[valorAtual.length - 1])) {
        tela.value += operador;
    }
}

function isOperador(caractere) {
    return ['+', '-', '*', '/'].includes(caractere);
}

function calcular() {
    const tela = document.getElementById('tela');

    // Array de frases que podem ser mostradas
    const mensagens = [
        'Amo a Iara',
        'A Iara é linda',
        'A Iara é perfeita',
        'Te amo'
    ];

    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    // Mostra a mensagem na tela
    tela.value = mensagemAleatoria;
}

function limpar() {
    const tela = document.getElementById('tela');
    tela.value = '';
}

