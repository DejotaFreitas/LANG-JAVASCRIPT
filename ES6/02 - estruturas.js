"use strict";
//=======================================================
let num = "10";

//=======================================================
if(num < 10){
  console.log("num é menor 10");
} else if (num == 10) {
  console.log("num é igual 10");
} else {
  console.log("num é maior 10");
}

//=======================================================
switch (num) {
  case 0: console.log("num é 0"); break;
  case 10: console.log("num é 10"); break;
  case 20: console.log("num é 20"); break;
  default: console.log("num não é 0, 10 ou 20");
}

//=======================================================
while (num > 0) {
  num--;
  if(num == 5) { continue; }
  if(num == 1) { break; }
  console.log(num);
}

//=======================================================
do {
  console.log(num);
  num--;
} while (num > 0);

//=======================================================
let array = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < array.length; i++) { console.log(array[i]); }

let array2 = {"letra 1":"A", "letra 2":"B", "letra 3":"C"};
for (let key in array2) {  console.log(key+" : "+array2[key]); }

let map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);

for (let i of map) { console.log(i); }
for (let [key, value] of map) {  console.log(key+"-"+value); }
for (let i of array) { console.log(i); }
(["A", "B", "C", "D", "E", "F"]).forEach(function(value, index, array){
  console.log(index+"-"+value+"-"+array);
});

//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================


//=======================================================
