"use strict";
//=======================================================
function imprimir (x){
  console.log("imprimir: "+x);
  return x;
}
console.log(imprimir(10));

//=======================================================
let funcao = function (x){
  console.log("imprimir: "+x);
  return x;
}
console.log(funcao(10));

//=======================================================
var array_function = (x) => {  console.log("imprimir: "+x); return x; }
console.log(array_function(10));

let soma = (x,y) => { return x+y; };
console.log(soma(20, 30));


//=======================================================
// funcão encapsulada, anonima
((...lista)=>{
  let soma = 0;
  for (let v of lista) {
    soma += v;
  }
  console.log(soma);
  return soma;
})(80, 20, 30, 50, 18, 0);

void function(){ console.log("Void força a função ser encapsulada"); }();

//=======================================================
// função geradora
function* geradora(){
  const nome = yield "qual seu nome ?";
  const idade = yield "qual sua idade ?";
  return "nome "+nome+", idade "+idade;
}
let it = geradora();
console.log(it.next());
console.log(it.next("Dejota")); // respondr a primeira pergunta
console.log(it.next(27)); // respondr a segunda pergunta

//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
