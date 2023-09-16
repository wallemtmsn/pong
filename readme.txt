Visão Geral:
Este código representa uma implementação simplificada do clássico jogo Pong. O jogo consiste em duas raquetes (uma controlada pelo jogador e outra pelo computador) e uma bola que se move pela tela. O objetivo é evitar que a bola passe pela sua raquete.

Funções e Descrições:

setup():

Configura o ambiente inicial do jogo.
Define o tamanho da tela para 800x400 pixels.
Define o tamanho do texto usado para o placar como 32 pixels.
preload():

Carrega as imagens que serão usadas no jogo.
imgFundo: Representa o fundo do jogo.
imgBola: Representa a imagem da bola.
draw():

Função principal que atualiza a tela do jogo.
Desenha o fundo, a bola, as raquetes e o placar.
Controla a lógica de movimentação da bola e das raquetes.
Verifica colisões e atualiza o placar.
Variáveis e Descrições:

imgFundo: Armazena a imagem de fundo do jogo.
imgBola: Armazena a imagem da bola.
x, y: Representam as coordenadas atuais da bola.
dx, dy: Representam a velocidade e direção da bola nos eixos x e y.
yJogador: Representa a posição y da raquete do jogador.
placarJogador: Armazena o placar atual do jogador.
yComputador: Representa a posição y da raquete do computador.
placarComputador: Armazena o placar atual do computador.
Lógica do Jogo:

A bola se move pela tela com uma velocidade e direção definidas por dx e dy.
A raquete do jogador se move verticalmente, seguindo a posição do mouse no eixo y.
A raquete do computador tenta seguir a bola, ajustando sua posição y para centralizar com a bola.
Se a bola tocar nas bordas superior ou inferior da tela, ela inverte sua direção no eixo y.
Se a bola tocar em uma das raquetes, ela inverte sua direção no eixo x e aumenta sua velocidade.
Se a bola sair da tela pelo lado esquerdo ou direito, o placar é atualizado e a bola é reiniciada no centro da tela.
