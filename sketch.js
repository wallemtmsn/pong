// funcao setup do ps5js
function setup() {
    createCanvas(801, 401);
    textSize(32); // Define o tamanho do texto para o placar
}

let imgFundo;
let imgBola;

function preload() {
    imgFundo = loadImage('mesa.jpg');
    imgBola = loadImage('bola.png');
}

// funcao draw
function draw() {
    image(imgFundo, 0, 0, width, height);
   
    // desenha a bola
    image(imgBola, x - 10, y - 10, 30, 30);
    
    // desenha o jogador
    rect(10, mouseY, 10, 150);
    
    // Calcula a magnitude da velocidade da bola
    let magnitudeVelocidadeBola = sqrt(dx*dx + dy*dy);
    let velocidadeComputador = map(magnitudeVelocidadeBola, 0, 10, 3, 10); // Mapeia a velocidade da bola para a velocidade da raquete
    
    // Atualiza a posição da raquete do computador para tentar centralizar com a bola
    var centroRaqueteComputador = yComputador + 75; // 75 é metade da altura da raquete (150/2)
    if (y > centroRaqueteComputador) {
        yComputador += min(velocidadeComputador, y - centroRaqueteComputador);
    } else if (y < centroRaqueteComputador) {
        yComputador -= min(velocidadeComputador, centroRaqueteComputador - y);
    }
    
    // desenha o computador
    rect(781, yComputador, 10, 150);
    
    // movimenta a bola
    x = x + dx;
    y = y + dy;
    
    // verifica se a bola bateu na parede
    if (y > height || y < 0) {
        dy = -dy;
    }
    
    // verifica se a bola bateu no jogador
    if (x < 30 && y > mouseY && y < mouseY + 150) {
        dx = dx * 1.1;
        dy = dy * 1.1;
        dx = -dx;
    }
    
    // verifica se a bola bateu no computador
    if (x > 770 && y > yComputador && y < yComputador + 150) {
        dx = dx * 1.1;
        dy = dy * 1.1;
        dx = -dx;
    }
    
    // verifica se a bola saiu da tela
    if (x > width || x < 0) {
        if (x > width) {
            // Jogador ganha um ponto
            placarJogador++;
        } else {
            // Computador ganha um ponto
            placarComputador++;
        }
        x = 400; // Centralizado no canvas
        y = 200;
        do {
            dx = random(-5, 5);
        } while (Math.abs(dx) < 3);
        do {
            dy = random(-5, 5);
        } while (Math.abs(dy) < 3);
    }

    // Desenha o placar
    fill(255); // Cor branca
    text(placarJogador, width/4, 50); // Placar do jogador
    text(placarComputador, 3*width/4, 50); // Placar do computador
}
  
// variaveis da bola
let x = 200;
let y = 200;
let dx = 5;
let dy = 5;
  
// variaveis do jogador
let yJogador = 200;
let placarJogador = 0; // Inicializa o placar do jogador
  
// variaveis do computador
let yComputador = 200;
let placarComputador = 0; // Inicializa o placar do computador