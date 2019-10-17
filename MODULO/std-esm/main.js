// instalr modulo necessario e momdulo usado no exemplo
// npm install --save @std/esm express

// crie arquivo entry.js e add essas linhas
// require = require("@std/esm")(module);
// module.exports = require("./main.mjs").default;

// crie projeto
// npm init -y

// importar modulo instalado
import express from "express";
const app = express();
app.get("/", (req, res) => res.json({ ok: true }));
app.listen(8080, () => console.log("ESM em com @std/esm"));
