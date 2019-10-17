"use strict";
//=======================================================
console.log(Math.random()); // numero aleatorio
console.log(Math.round(Math.random() * 10)); // numero aleatorio de 0 a 10

//=======================================================
let x = 10;
console.log(typeof x);

let y = new Number("20");
console.log(typeof y);

let soma = x+y;
console.log(soma, typeof soma);
console.log(isNaN("casa"));// verifica se nao é um numero
console.log((10.151589).toString());

//=======================================================
console.log(5+"5"); // errado
console.log(5+parseInt("5"));
console.log(5+parseFloat("5.3"));

//=======================================================
console.log(Math.abs(-1000000)); // valor positivo
console.log((10.151589).toFixed("2")); // casas decimais,e converte pra STRING
console.log((10.151589).toPrecision(5)); // define quantidade de numero vai pegar
//=======================================================
// arredondamento padrao
console.log(Math.round(10.4));
console.log(Math.round(10.6));
// aredonda sempre pra cima
console.log(Math.ceil(10.4));
console.log(Math.ceil(10.6));
// aredonda sempre pra baixo
console.log(Math.floor(10.4));
console.log(Math.floor(10.6));

//=======================================================
console.log(Math.max(-2,-1,0,1,2));
console.log(Math.min(-2,-1,0,1,2));
//=======================================================
console.log(Math.sqrt(4)); // raiz quadrada
console.log(Math.cbrt(8)); // raiz cubica
console.log(Math.pow(16, 1/4)); // raiz QUARTA
console.log(16**(1/4)); // raiz QUARTA
console.log(Math.pow(32, 1/5)); // raiz QUINTA
console.log(32**(1/5)); // raiz QUINTA

//=======================================================
console.log(Math.log2(256));
console.log(Math.log10(1000));

//=======================================================
console.log(Math.sin(0.5)); // seno
console.log(Math.cos(0.5)); // cosseno
console.log(Math.tan(0.5)); // cosseno

//=======================================================
console.log(0b10100); // binario (0 a 1)
console.log(0o010); // octal (0 a 7)
console.log(0xFF); // hexadecima (0 a 9 e A a F)

console.log((20).toString(2)); // binario
console.log((8).toString(8)); // octal
console.log((255).toString(16)); // hexadecima

//=======================================================



//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
