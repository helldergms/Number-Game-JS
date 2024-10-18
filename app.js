let listaNumerosGerados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextosNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.25});
}


function exibirMensagemInicial() {
    exibirTextosNaTela('h1', 'Bem-vindo ao Game');
    exibirTextosNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarPalpite() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextosNaTela('h1', 'Parabéns, você acertou!' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextosNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else {
        if (chute > numeroSecreto) {
            exibirTextosNaTela('p','O número secreto é menor!');
        }

        else {
            exibirTextosNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
    let numeroMaximo = 5;
    let numeroEscolhido  = parseInt(Math.random() * numeroMaximo + 1);
    if (listaNumerosGerados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }

    else {
        listaNumerosGerados.push(numeroEscolhido);
        console.log(listaNumerosGerados);
        return numeroEscolhido;
    }
}

gerarNumeroAleatorio();


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}