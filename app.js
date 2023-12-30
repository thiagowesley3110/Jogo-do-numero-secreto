let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1

exibirMensagemInicial();

function exibirTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'JOGO DO NUMERO SECRETO');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Parabens voce acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número é maior que ${chute}`);
        }
    tentativas++;
    limparCampo();
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemnetoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElemnetoNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


