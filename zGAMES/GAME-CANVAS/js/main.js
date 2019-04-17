//importando javascrit
importarJS("js/canvas.js");
importarJS("js/imagens.js");

window.onload = function() {
  var c = new Canvas();
  var img = criarImagem("img/chars.png");
  var img2 = criarImagem("img/chars.png");
  desenharImagem(c.ctx, img2, 100, 100);
}

function importarJS(src){
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = src;
  document.head.appendChild(js);
}
