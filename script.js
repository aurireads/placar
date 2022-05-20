//pegar o que o usuario digitou e guardar numa variavel
const nomeTimeA = prompt("digite o nome do time a"); //variavel do tipo string
const nomeTimeB = prompt("digite o nome do time b");

//variaveis com os dados
let pontoA = 0 //variavel do tipo number
let pontoB = 0;
let setA = 0;
let setB = 0;

//variaveis com elemento HTML
const nomeTimeA_HTML = document.getElementById("nomeTimeA");
const nomeTimeB_HTML = document.getElementById("nomeTimeB");
const pontuacaoA_HTML = document.getElementById("pontuacaoA")
const pontuacaoB_HTML = document.getElementById("pontuacaoB")
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

//PEGANDO DA VARIAVEL E COLOCANDO NA TELA DOS TIMES
nomeTimeA_HTML.innerText = nomeTimeA;
nomeTimeB_HTML.innerText = nomeTimeB;

function zerarPlacar () {
    pontoA = 0;
    pontoB = 0;
    pontuacaoA_HTML.innerText = pontoA;
    pontuacaoB_HTML.innerText = pontoB;
}

function issoSeraExecutadoQuandoUsuarioClicarEmA() {
    pontoA++;
    pontuacaoA_HTML.innerText = pontoA;

    if (pontoA >= 25 && pontoA - pontoB >= 2) {
    setA++;
    setA_HTML.innerText = setA;

    zerarPlacar();
    }
}

function issoSeraExecutadoQuandoUsuarioClicarEmB() {
    pontoB++;
    pontuacaoB_HTML.innerText = pontoB;
    
    if (pontoB >= 25 && pontoB - pontoA >= 2) {
        setB++;
        setB_HTML.innerText = setB;
       
        zerarPlacar();
}
}

pontuacaoA_HTML.addEventListener("click", issoSeraExecutadoQuandoUsuarioClicarEmA);
pontuacaoB_HTML.addEventListener("click", issoSeraExecutadoQuandoUsuarioClicarEmB);
