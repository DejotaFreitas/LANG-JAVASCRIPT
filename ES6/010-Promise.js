
"use strict";
// cria uma funcao assicrona
//=======================================================
let div = (x, y)=> {
  return new Promise((resolve, reject)=>{
    if(y < 1){
      return reject("Y tem quer ser maior que 0.");
    }
    return resolve(x/y);
  });
}

//=======================================================
// executando
console.log("START");

div(1, 1)
  .then((x)=>{ console.log(x); })
  .catch((x)=>{ console.log(x); });

console.log("END");
