"use strict";
//=======================================================
let x = 10;
let y = 10;

console.log("X é "+x+" e Y é "+y);

// CRASE = Shift+Acento_Agudo
let texto = `
X é ${x} e
Y é ${y}
`;

console.log(texto);
console.log(typeof texto);
console.log(typeof x);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);


//=======================================================
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log(x % y);
console.log(x ** y);

console.log(++x);
console.log(x++);
console.log(x);

console.log(--y);
console.log(y--);
console.log(y);

//=======================================================
console.log(4 == "4");
console.log(x != y);

// compara valor e tipo da variavel
console.log(4 === "4");
console.log(x !== y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

console.log(x <= y || x >= y);
console.log(x <= y && x >= y);

console.log(!true);
console.log(!false);

//=======================================================

x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);
