"use strict";
const CONSTANTE = 99999999;
exports.CONSTANTE = CONSTANTE;

exports.soma = (x, y) => { return x + y; }
module.exports.sub = (x, y) => { return x - y; }

exports.Developer = class {
  constructor(name) {
    this._name = name
  }
  get name() {
    return "GET: "+this._name
  }
  set name(nome) {
    this._name = nome
    console.log("SET: "+this._name);
  }
}
