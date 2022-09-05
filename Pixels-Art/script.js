// função para chamar cores da paleta

function getPaleta() {
  const paleta = document.getElementById('color-palette').children;
  return paleta;
}

// função para chamar cores da paleta

function getBoard() {
  const board = document.getElementById('pixel-board').children;
  return board;
}

// cores iniciais da paleta
if (localStorage.getItem('colorPalette') == null) {
  const cores = getPaleta();
  cores[0].style.backgroundColor = 'black';
  cores[1].style.backgroundColor = 'blue';
  cores[2].style.backgroundColor = 'red';
  cores[3].style.backgroundColor = 'green';
} else {
  const paleta = JSON.parse(localStorage.getItem('colorPalette'));
  const cores = getPaleta();
  cores[0].style.backgroundColor = 'black';
  for (let i = 1; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = paleta[i];
  }
}

// cores iniciais do quadro
if (localStorage.getItem('pixelBoard') !== null) {
  const pixel = getBoard();
  const storage = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = storage[i];
  }
}

// local storage da paleta

function storagePaleta() {
  const paleta = getPaleta();
  const storage = [];
  for (let i = 0; i < paleta.length; i += 1) {
    storage[i] = paleta[i].style.backgroundColor;
  }
  localStorage.setItem('colorPalette', JSON.stringify(storage));
}

// local storage da paleta

function storagePixel() {
  const quadro = getBoard();
  const storage = [];
  for (let i = 0; i < quadro.length; i += 1) {
    storage[i] = quadro[i].style.backgroundColor;
  }
  localStorage.setItem('pixelBoard', JSON.stringify(storage));
}

// função para gerar o rbg e atribuir as cores

function coresBotao() {
  const rgb = [];
  for (let j = 1; j < 4; j += 1) {
    for (let i = 0; i < 3; i += 1) {
      rgb[i] = Math.floor(Math.random() * (255 - 0) + 0);
    }
    const paleta = getPaleta();
    paleta[j].style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }
  storagePaleta();
}

// botaão de cores aleatórias
const botao = document.getElementById('button-random-color');
botao.addEventListener('click', coresBotao);

// fucção de clique na paleta
function selectedPaleta(evento) {
  const e = evento.target;
  const remove = document.querySelector('.selected');
  remove.classList.remove('selected');
  e.classList.add('selected');
}
// evento de click nas cores
const paleta = getPaleta();
for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', selectedPaleta);
}
// função clear board
function clearBoard() {
  const quadro = getBoard();
  for (let i = 0; i < quadro.length; i += 1) {
    quadro[i].style.backgroundColor = 'white';
  }
}
// botão clear
const botaoClear = document.getElementById('clear-board');
botaoClear.addEventListener('click', clearBoard);

// função pintar
function pintar(evento) {
  const cor = document.querySelector('.selected').style.backgroundColor;
  const e = evento.target;
  e.style.backgroundColor = cor;
  storagePixel();
}
// mudar de cor quadro de pixels
const quadro = getBoard();
for (let i = 0; i < quadro.length; i += 1) {
  quadro[i].addEventListener('click', pintar);
}
