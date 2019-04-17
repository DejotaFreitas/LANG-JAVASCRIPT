window.onload = function() {

  importarJS("notificacao.js");
  importarJS("data.js");
  importarJS("cpf.js");
  importarJS("celular.js");
  importarJS("telefone.js");
  importarJS("cnpj.js");
}

function importarJS(src){
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = src;
  document.head.appendChild(js);
}
