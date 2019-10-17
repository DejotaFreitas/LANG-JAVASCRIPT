"use strict";
//=======================================================
let map = new Map([ ["chave", "valor"], ["k", "v"] ]);
map.set(1, "Dejota");
map.set("Dejota", 1);

// percorrendo
map.forEach((v, k, m)=>{ console.log(v, k); });
// percorrendo
for (let it of map.entries()) {
  console.log(it[0], it[1]);
}

console.log(map);
console.log(map.size); // tamanho

console.log(map.get(1)); // acessar key
console.log(map.get("Dejota")); // acessar key

map.delete(1) // deletar
console.log(map);

console.log(map.has("CHAVE INVALIDA")); // contem

// retorba MapIterator com valores
console.log(map.values());
// retorba MapIterator com chaves
console.log(map.keys());


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


//=======================================================


//=======================================================
