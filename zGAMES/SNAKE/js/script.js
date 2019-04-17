window.onload = function() {
  init();
}

var canvas, ctx, WIDTH, HEIGHT, TEMPO, FPS, tileSize, playing, coluna;
var snake, comidaSnake, score, loop;
var keys = { left: 37, up: 38,  right: 39,  down: 40, space: 32 };
var globalTouch = [], offset = [];

function init() {
  canvas = document.createElement('canvas');
  coluna = 30;
  resizeWindow();
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  FPS = 8;
  TEMPO = 1000;
  newGame();
  eventos();
  loop = setInterval(run, TEMPO/FPS);
}

function newGame() {
  playing = false;
  score = 0;
  snake = new Snake();
  comidaSnake = new ComidaSnake();
}

function run() {
  update();
  draw();
}

function update() {
  snake.update();
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  snake.draw();
  comidaSnake.draw();
  scoreDraw();
}

function Snake() {
  this.body = [[2, 0], [1, 0], [0, 0]];
  this.direction = [1, 0];

  this.update = function() {
    var nextPos = [this.body[0][0] + this.direction[0], this.body[0][1] + this.direction[1]];

    if (!playing) {
      if (this.direction[1] == -1 && nextPos[1] <= ((HEIGHT*0.2)/tileSize)) {
          this.direction = [1, 0];
      } else if (this.direction[0] == 1 && nextPos[0] >= ((WIDTH*0.8)/tileSize)) {
          this.direction = [0, 1];
      }else if (this.direction[1] == 1 && nextPos[1] >= ((HEIGHT*0.8)/tileSize)) {
          this.direction = [-1, 0];
      }else if (this.direction[0] == -1 && nextPos[0] <= ((HEIGHT*0.2)/tileSize)) {
          this.direction = [0, -1];
      }
    }

    //cobra nao pode volta pra traz
    if (nextPos[0] == this.body[1][0] && nextPos[1] == this.body[1][1]) {
      if (this.direction[0]==0) {
        this.direction[1] *= -1;
      } else {
        this.direction[0] *= -1;
      }
      nextPos = [this.body[0][0] + this.direction[0], this.body[0][1] + this.direction[1]];
    }

    //colidiu com a comidaSnake
    if (colidiu(nextPos[0]*tileSize, nextPos[1]*tileSize,
         comidaSnake.x*tileSize, comidaSnake.y*tileSize, tileSize)) {
      this.body.unshift(nextPos);
      comidaSnake = new ComidaSnake();
      score += 1;
    } else {
      this.body.pop();
      this.body.unshift(nextPos);
    }

    //colediu com a cauda
    var tamanho = this.body.length;
    var i = 4;
    for ( ; i < tamanho; i++) {
      if (colidiu(nextPos[0]*tileSize, nextPos[1]*tileSize,
           this.body[i][0]*tileSize, this.body[i][1]*tileSize, tileSize)) {
        clearInterval(loop);
      }
    }


    //saiu da tela
    if (estaFora(nextPos[0]*tileSize, nextPos[1]*tileSize, tileSize, tileSize,
          0, 0, canvas.width, canvas.height )) {
      //clearInterval(loop);
      playing = false;
    }

  }

  this.draw = function() {
    var tamanho = this.body.length;
    var i;
    ctx.fillStyle = "#e67e22";
    for (i = tamanho-1; i > 0; i--) {
      ctx.fillRect(this.body[i][0]*tileSize, this.body[i][1]*tileSize, tileSize, tileSize);
    }
    ctx.fillStyle = "#d35400";
    ctx.fillRect(this.body[0][0]*tileSize, this.body[0][1]*tileSize, tileSize, tileSize);
  }

}

function ComidaSnake() {
  this.color = "#2ecc71";
  var mx = (WIDTH > HEIGHT ? coluna : Math.floor(WIDTH/tileSize));
  var my = (HEIGHT > WIDTH ? coluna : Math.floor(HEIGHT/tileSize));
  this.x = Math.floor(Math.random()*mx);
  this.y = Math.floor(Math.random()*my);
  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x*tileSize, this.y*tileSize, tileSize, tileSize);
  }
}

function scoreDraw() {
    ctx.fillStyle = "#ecf0f1";
  ctx.font = tileSize+"px Ubuntu";
  ctx.fillText(score , tileSize/3, tileSize);
}

function eventos() {
    window.addEventListener('resize', resizeWindow);
    window.addEventListener('keydown', keyDown);
    //mobile
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('touchmove', touchMove);
    window.addEventListener('touchend', touchEnd);
    window.addEventListener('orientationchange', orientationChange);
}

function resizeWindow() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  tileSize = Math.max(Math.floor(WIDTH/coluna), Math.floor(HEIGHT/coluna));
}

function keyDown(e) {
  var tecla = e.keyCode;
  if (!playing && (tecla == keys.left || tecla == keys.up ||
    tecla == keys.right ||tecla == keys.down)) {
      playing = true;
  } else if (tecla == keys.space) {
    playing = false;
  }
  switch (tecla) {
    case keys.left: snake.direction = [-1, 0];  break;
    case keys.up: snake.direction = [0, -1];  break;
    case keys.right: snake.direction = [1, 0];  break;
    case keys.down: snake.direction = [0, 1];  break;
  }
}

function touchStart(e) {
  e.preventDefault();
  var touch = e.touches[0];
  globalTouch = [touch.pageX, touch.pageY];
}

function touchMove(e) {
  var touch = e.touches[0];
  offset = [touch.pageX - globalTouch[0], touch.pageY - globalTouch[1]];
}

function touchEnd(e) {
  if (!playing) {
      playing = true;
  }
  if (Math.abs(offset[0]) > Math.abs(offset[1])) {
    snake.direction = [offset[0] / Math.abs(offset[0]), 0];
  }  else {
    snake.direction = [0, offset[1] / Math.abs(offset[1])];
  }
}

function orientationChange(){
  resizeWindow();
  comidaSnake = new ComidaSnake();
  update();
  draw();
}

function colidiu(xc, yc, xo, yo, size) {
  if ( xc + size/2 > xo && xc + size/2 < xo + size
    && yc + size/2 > yo && yc + size/2 < yo + size ) {
    return true;
  } else {
    return false;
  }
}

function estaFora(xc, yc, lc, ac, xo, yo, lo, ao) {
  if ( xc < xo || yc < yo || xc + lc > xo + lo || yc + ac > yo + ao ) {
    return true;
  } else {
    return false;
  }
}
