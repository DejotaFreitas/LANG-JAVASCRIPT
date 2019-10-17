"use strict";
//=======================================================
class Retangulo {

  constructor(base=2, altura=2) {
    this._base = base;
    this._altura = altura;
    console.log("Retangulo");
}

  calc_area() {
    console.log(this._base * this._altura);
  }

  static metodo_estatico(){
    console.log("Executou método estático");
  }

}

Retangulo.metodo_estatico();

let r = new Retangulo(2, 3);
r.calc_area();


//=======================================================

let Triangulo = class {

  constructor() {
    console.log("Triangulo");
  }
  /*
  * Calcul a area do retangulo
  * @param base, inteiro maior que 0
  * @param altura, inteiro maior que 0
  */
  calc_area(base, altura) {
    console.log((base * altura)/2);
  }

}

let t = new Triangulo();
t.calc_area(4, 6);
