//BOAS PRATICAS
window.onload = function () {
  //APLICAR FUNCOES NO ELEMNTOS HTML POR AQUI
  document.getElementsById('id1').onclick = funcao();
  //OU CRIAR A FUNÇÃO ANONIMA LOGO
  getId('id2').onclick = function () {
    laert("FUNÇÃO");
  }

  getId('id3').onclick = function () {
    laert("FUNÇÃO");
    //returnar false faz com evento padrão nao seja ativado, como num link
    return false;
  }

}
//meu metodo pegar objeto html
getId(id){
  return document.getElementsById(id);
}

//Acessar evento em qualquer browser
function evento(evt) {
  var e = evt ? evt : window.event;
  alert(e.type);
  return e;
}

function funcao() {
  laert("FUNÇÃO");
}
