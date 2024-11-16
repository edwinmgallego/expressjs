/**/
const express = require("express");
const app = express();

app.get("/products", (req, res) => {

    //validar datos
    //query a  base de datos
    //procesar datos
  res.send("productos destacados");
});
app.post("/products", (req, res) => {
  res.send("creando productos destacados");
});
app.put("/products", (req, res) => {
  res.send("actualizando productos destacados");
});
app.delete("/products", (req, res) => {
  res.send("elimintando productos destacados");
});
app.patch("/products", (req, res) => {
  res.send("actualizando una parte de los  productos destacados");
});

app.listen(3000);
console.log(`Server en el puerto ${3000}`);
