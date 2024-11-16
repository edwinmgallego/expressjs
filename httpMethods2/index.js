/**/
const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.send("hola mundo");
});
app.get("/miArchivo", (req, res) => {
  res.sendFile("./Unofficial_JavaScript_logo_2.svg.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    nombre: "edwin",
    apellido: "gallego",
    edad: 42,
    residencia: {
      ciudad: "cali",
      direccion: "avenida siempre viva 123",
    },
    puntos: [1, 2, 3, 4, 5, 6],
  });
});

app.listen(3000);
console.log(`Server en el puerto ${3000}`);
