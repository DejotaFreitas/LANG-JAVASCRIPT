"use strict";
//=======================================================
let pessoa = {};
pessoa.nome = "Dejota";
pessoa.idade = 27;
pessoa.sexo = "M";
console.log(pessoa);

//=======================================================
delete pessoa.sexo;
console.log(pessoa);

// cria um objeto que nao pode ser alterado
let objecto_imutavel = Object.freeze(pessoa);

//verifica se esta congelado
console.log(Object.isFrozen(pessoa));

//=======================================================
// copiar objeto
let p = Object.assign({}, pessoa);
p.sexo = "M";
console.log(p);

//=======================================================
let x = {
  nome: "Dejota",
  idade: 27,
  sexo: "M"
};
let {nome, idade, sexo} = x;
console.log(nome, idade, sexo);
console.log("Object.keys", Object.keys(x));
console.log("Object.values", Object.values(x));
console.log(JSON.stringify(x));
let oj = JSON.parse('{"nome":"Dejota","idade":27,"sexo":"M"}');
console.log(typeof oj);
//=======================================================
let f = {
  nome: "Dejota",
  idade: 27,
  sexo: "M",
  show: ()=>{ console.log("Function", x.nome, x.idade, x.sexo) },
  soma:(x, y)=>{ return x+y; }
};
f.show();
console.log(f.soma(10, 20));

//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
