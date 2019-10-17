"use strict";
//=======================================================
let texto = "Hello World JavaScript";
let texto2 = "íêáão"

console.log(texto.valueOf());
console.log(texto.toString());
//=======================================================
// metodos com tags html
console.log(texto.bold());
console.log(texto.big());
console.log(texto.sub());
console.log(texto.fontsize(20));
//=======================================================
// verificação se começa
console.log(texto.startsWith('Hel'));
// verificação se termina
console.log(texto.endsWith('Script'));
// verificação se está incluido
console.log(texto.includes('vaScr'));

//=======================================================
 // index do W
console.log(texto2.search("ã"));
 // ultimo index do a
console.log(texto.search(/o/));

//=======================================================
 // index do W
console.log(texto.indexOf("W"));
 // ultimo index do a
console.log(texto.lastIndexOf("a"));

//=======================================================
// pegar caractere na posição
console.log(texto.charAt(0));
// tras numero tabela ASCII do caractere na posição
console.log(texto.charCodeAt(0));

//=======================================================
// concatena varias string
console.log(texto.concat(" kkk", " huahuah", texto2));

//=======================================================
// subistitui a primeira ocrrencia
console.log(texto.replace("l", "_|"));

// subistitui todos com expressão regular
console.log(texto.replace(/l/g, "_|"));

//=======================================================
// quebra em array
console.log(texto.split(" "));

// quebra todos caracteres
// console.log(texto.split(""));

//=======================================================
// fatiar estring
console.log(texto.substring(6));

console.log(texto.slice(6));
console.log(texto.slice(0, 5));
console.log(texto.slice(-6)); // pega os 6 ultimos
console.log(texto.slice(5, -6));

// de onde começa e quantas casas vai andar
console.log(texto.substr(2, 4));

//=======================================================
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.toLocaleUpperCase());
console.log(texto.toLocaleLowerCase());

//=======================================================
// Extender ou Criando metodos da classe string
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase();
}
console.log("tEXTO".capitalize());
//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
