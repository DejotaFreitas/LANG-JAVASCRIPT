"use strict";
//=======================================================
let vetor = ["A", "B", "C", "D"];
let objeto = {1:"ALL", 2:2, 3:true, 4:[1,2,3]};
let array = new Array(1, 2, 3, 4, 5);
array[5] = 6;
array.shift() // REMOVE NO INICIO
array.pop() // REMOVE NO FINAL
array.push(7); // ADD FINAL
array.unshift(10) // ADD NO INICIO
console.log(array);

//=======================================================
// atribur uma lista de variaveis ao valores do array
let [x, y, z] = vetor;
console.log(x, y, z);

//=======================================================
console.log(array.reverse()); // coloca array em ordem reversa

// ORDENA ELEMENTOS ARRAY
console.log(array.sort((a, b)=>{
  if (a < b) return -1;
  if (a > b) return 1;
  if (a == b) return 0;
}));

// retorna verdadeiro se todos elmentos do array forem maior q 2 (AND)
console.log(([1, 2, 3]).every((v, i, array)=>{ return v > 2; }));

// retorna verdadeiro se pelo menos 1 elmentos do array forem maior q 2 (OR)
console.log(([1, 2, 3]).some((v, i, array)=>{ return v > 2; }));

// retorna um array com elementos que são maiores q 3
console.log(([1, 2, 3, 4, 5]).filter((v, i, array)=>{ return v > 3; }));

// retorna a soma de todos elementos, soma += elemento
console.log(([1, 2, 3, 4, 5]).reduce((soma, elemento, index, array)=>{ return soma+elemento; }));


//=======================================================
// CONVERTER ARRAY EM STRING USANDO SEPARADOR
console.log((["A","B","C","D"]).join());
console.log((["A","B","C","D"]).join(" - "));

//=======================================================
// CONCATENAR ARRAYS
console.log( (["A","B","C","D"]).concat(100) );
console.log( (["A","B","C","D"]).concat([1,2,3,4,5]) );

//=======================================================
// se estive contido retorna a posição
console.log( (["A","B","C","D"]).indexOf("C") );
// se não estiver contido retorna -1
console.log( (["A","B","C","D"]).indexOf("E") );

//=======================================================
// fatiar
console.log( (["A","B","C","D"]).slice(2) );
console.log( (["A","B","C","D"]).slice(1, 3) );

//=======================================================
// splice(index vou adicionar, posição remover, lista de elementos qua vou adicionar)
console.log( (["A","B","C","D"]).splice(1, 0, "A","B","C","D") );

//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
