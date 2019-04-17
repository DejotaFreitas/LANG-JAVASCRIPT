window.onload = function() {
  var canvas = document.getElementById('mycanvas');
  canvas.setAttribute("width", screen.width-30);
  canvas.setAttribute("height", screen.height-130);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "white";

    var Bola = function(){
    this.altura = 30;
    this.largura = 30;
    this.x =canvas.width /2 - this.largura/2;
    this.y = canvas.height/2 - this.altura/2;
    this.dx = -1;
    this.dy = 1;
    this.aceleracao = 0;
    this.velocidade = 10;
  }

  var BlocoEsquerda = function(){
    this.altura = 200;
    this.largura = 30;
    this.x = 0;
    this.y = canvas.height/2 - this.altura/2;
    this.score = 0;
    this.velocidade = 20;
  }

  var BlocoDireita = function(){
    this.altura = 200;
    this.largura = 30;
    this.x = canvas.width - this.largura;
    this.y = canvas.height/2 - this.altura/2;
    this.score = 0;
    this.velocidade = 10;
  }

  var bola = new Bola();
  var esquerda = new BlocoEsquerda();
  var direita = new BlocoDireita();

  var teclas = { };

  document.addEventListener("keydown", function(e) {
    teclas[e.keyCode] = true;
  }, false);

    document.addEventListener("keyup", function(e) {
      delete teclas[e.keyCode];
    }, false);

    function moveBloco() {
      if (esquerda.y < 0){
        esquerda.y = 1;
      }
      if(esquerda.y+esquerda.altura>canvas.height){
        esquerda.y =  canvas.height-esquerda.altura-1;
      }
      if (direita.y<0){
        direita.y = 1;
      }
      if(direita.y+direita.altura>canvas.height){
        direita.y =  canvas.height-direita.altura-1;
      }

      if (87 in teclas && esquerda.y > 0) {
        esquerda.y -= esquerda.velocidade;
      }else if (83 in teclas && (esquerda.y + esquerda.altura) < canvas.height){
        esquerda.y += esquerda.velocidade;
      }

      if (38 in teclas && direita.y > 0) {
        direita.y -= direita.velocidade;
      }else if (40 in teclas && (direita.y + direita.altura) < canvas.height){
        direita.y += direita.velocidade;
      }
    }

    function restartGame() {
      bola.x = canvas.width/2 - bola.largura/2;
      bola.y = canvas.height/2 - bola.altura/2;
      bola.aceleracao = 0;
      bola.velocidade = 10;
    }

    function randomBloco() {
      return ((Math.random()*200)+100).toFixed();
    }

    function moveBola() {
      var esquerdaOUdireita = 2;
      if (bola.y + bola.altura >= esquerda.y
        && bola.y <= esquerda.y + esquerda.altura
        && bola.x <= esquerda.x + esquerda.largura ) {
          bola.dx = 1;
    } else if (bola.y + bola.altura >= direita.y
      && bola.y <= direita.y + direita.altura
      && bola.x + bola.largura >= direita.x ) {
        bola.dx = -1;
    }

    if (bola.y <=0) {
      bola.dy = 1;
      bola.aceleracao += 1;
    } else if (bola.y + bola.altura >= canvas.height) {
      bola.dy = -1;
      bola.aceleracao += 1;
    }

    bola.x += (bola.velocidade + bola.aceleracao) * bola.dx;
    bola.y += (bola.velocidade + bola.aceleracao) * bola.dy;

    if (bola.x < (esquerda.x + esquerda.largura/2) - (bola.velocidade + bola.aceleracao)) {
      direita.score += 1;
      restartGame();
    } else if ((bola.x + bola.largura/2) - (bola.velocidade + bola.aceleracao) > direita.x) {
      esquerda.score += 1;
      restartGame();
    }
  }



  function desenha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveBola();
    moveBloco();

    ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);
    ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura);
    ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);
    ctx.font = "30px Ubuntu Monospace";
    ctx.fillText(esquerda.score + " X " + direita.score, canvas.width/2-30, 30);

  }

  setInterval(desenha, 10);

}
