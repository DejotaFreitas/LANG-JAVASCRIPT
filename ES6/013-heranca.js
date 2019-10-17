"use strict";
//=======================================================
class Pessoa {

  constructor(nome="nome", idade=18) {
    if(nome) this._nome = nome;
    if(idade) this._idade = idade;
  }

  info(){
    let r = '';
    if(this._nome) r += `Nome: ${this._nome}`;
    if(this._idade) r += `, Idade: ${this._idade}`;
    return r;
  }

  get nome() {
    return "GET: "+this._nome;
  }

  set nome(value) {
    this._nome = value;
    console.log("SET: "+this._nome);
  }

}

//=======================================================
class Aluno extends Pessoa {
  constructor(nome, idade, serie) {
    super(nome, idade);
    this.serie = serie;
  }
  info(){
    return super.info()+`, Serie: ${this.serie}`;
  }

}

//=======================================================
let a = new Aluno("Dejota", 29, 8);
console.log(a.info());
console.log(a.nome);
a.nome="DEJOTA2"
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