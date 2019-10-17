"use strict";
const modulo = require('./lib');

console.log(modulo.CONSTANTE);

console.log(modulo.soma(10,20));
console.log(modulo.sub(10,20));

let dev = new modulo.Developer("Dejota")
console.log(dev.name);
dev.name = "XUXA"
