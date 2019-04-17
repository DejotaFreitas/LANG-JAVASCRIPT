// desenharImagem(c.ctx,img ,
//   216, 19, 96, 73, //posição e dimensoes na imagem
//   10, 10, 96, 73); //posição e dimensoes na canvas

function criarImagem(url) {
  var img = new Image();
  img.src = url;
  return img;
}

function desenharImagem(cxt, img, x, y) {
  img.onload = function() {
  ctx.drawImage(img, x, y);
  }
}

function desenharTile(cxt, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
  img.onload = function() {
  ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}
