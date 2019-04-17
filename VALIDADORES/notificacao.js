
function elementoEmFocus(elemento) {
    elemento.setAttribute('style', 'border:2px solid blue;');
}

function notificar(valido, elemento, notificicacao) {
  if (valido) {
    elemento.setAttribute('style', 'border:2px solid green;');
  } else {
    if (elemento.hasAttribute("required") || elemento.value.length > 0)
      elemento.setAttribute('style', 'border:2px solid red;');
    //exibir notificação ????
  }
}
