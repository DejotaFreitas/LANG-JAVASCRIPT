
var Canvas = function() {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  LARGURA = window.innerWidth-10;
  ALTURA = window.innerHeight-10;
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  document.body.appendChild(canvas);

  //eventos
  window.addEventListener('resize', function() {
    LARGURA = window.innerWidth-10;
    ALTURA = window.innerHeight-10;
    canvas.width = LARGURA;
    canvas.height = ALTURA;
  });

}
