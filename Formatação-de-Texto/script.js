// declarando variavel do texto e aplicando consfigurações de local storage
const texto = document.getElementById('texto');
texto.style.backgroundColor = localStorage.getItem('corDeFundo');
texto.style.color = localStorage.getItem('corDoTexto');
texto.style.fontSize = localStorage.getItem('tamanhoDoTexto');
texto.style.lineHeight = localStorage.getItem('espacamento');

// mudando a cor de fundo do texto
const cores = document.getElementById("cores").children;
for (let i=0;i<cores.length ; i+=1){
    cores[i].addEventListener('click', escolhaDaCor);
}
function escolhaDaCor(evento){
    let cor = evento.target.innerText;
    texto.style.backgroundColor = cor;
    localStorage.setItem('corDeFundo' , cor);
}

// Mudando a cor do texto
const corDoTexto = document.getElementById("corDoTexto").children;

for (let i=0;i<corDoTexto.length ; i+=1){
    corDoTexto[i].addEventListener('click', escolhaCorDoTexto);
}
function escolhaCorDoTexto(evento){
    let cor = evento.target.innerText;
    texto.style.color = cor;
    localStorage.setItem('corDoTexto' , cor);
}

// Mudanto o tamanhdo da fonte

const tamanhoDaFonte = document.getElementById("fonte").children;

for (let i=0;i<tamanhoDaFonte.length ; i+=1){
    tamanhoDaFonte[i].addEventListener('click', fonte);
}
function fonte(evento){
    let tamanho = evento.target.innerText;
    texto.style.fontSize = tamanho;
    localStorage.setItem('tamanhoDoTexto' , tamanho);
}

// Espacamento entre as linhas
const espacamento = document.getElementById("linha").children;

for (let i=0;i<espacamento.length ; i+=1){
    espacamento[i].addEventListener('click', linha);
}
function linha(evento){
    let linha = evento.target.innerText;
    texto.style.lineHeight = linha;
    localStorage.setItem('espacamento' , linha);
}

// tipo da fonte

const fontFamily = document.getElementById("tipoFonte").children;

for (let i=0;i<fontFamily.length ; i+=1){
    fontFamily[i].addEventListener('click', tFonte);
}
function tFonte(evento){
    let tipo = evento.target.innerText;
    texto.style.fontFamily = tipo;
    localStorage.setItem('tipoFonte' , tipo);
}

// botao pra resetar texto
const botao = document.getElementById("botao");
botao.addEventListener("click" , reset);

function reset(event){
localStorage.clear();
location.reload();
}