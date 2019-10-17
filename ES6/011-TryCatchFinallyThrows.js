"use strict";
//=======================================================
let div = (x, y)=>{
  try {
    console.log("INICIO");
    if(y == 0)
      throw("Impossivel dividir por 0.");
    console.log("CALCULANDO....");
    console.log(x/y);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("FIM");
  }
}

div(100, 10);
div(100, 0);
//=======================================================
