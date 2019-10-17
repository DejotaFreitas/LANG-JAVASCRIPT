"use strict";
// comentario
//=======================================================
/*
  comemtatario
  de varias linhas
*/

//=======================================================
// não precisa de ponto e virgula (;) se tiver apenas um comando por linha
const texto = "HELLO WORLD"
console.log(texto)

let condicao = true
console.log(condicao)

var x, y
x = 5
y = 6
var soma = x * y
console.log(soma)

//=======================================================
// constante
const PI = 3.14
console.log(PI);

//=======================================================

// variavel sem escopo global, pode ser acesssado em qualquer lugar
for (var j = 0; j < 0; i++) {
  console.log(j);
}
console.log(j);

//=======================================================
// variavel de escopo
// so pode acessar dentro escopo que foi declarada
// tem mais performace e economiza memoria
for (let i = 0; i < 0; i++) {
  console.log(i);
}
// console.log(i); // erro pois nao está no escopo
