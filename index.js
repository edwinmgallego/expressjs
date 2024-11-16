/**/
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  /*res.sendFile("./static/index.html", {
    root: __dirname,
  });*/
  res.send("hola a todos"); //le da la informacion al navegador! con mas  informacion que  end

  //res.end("hola a todos");
});
app.get("/about", (req, res) => {
  /*res.sendFile("./static/index.html", {
    root: __dirname,
  });*/
  res.send("about"); //le da la informacion al navegador! con mas  informacion que  end

  //res.end("hola a todos");
});

app.get("/clima", (req, res) => {
  /*res.sendFile("./static/index.html", {
    root: __dirname,
  });*/
  res.send("el clima esta frio"); //le da la informacion al navegador! con mas  informacion que  end

  //res.end("hola a todos");
});
app.use((req, res) => {
  res.status(404).send("404 usuario no encontrado");// aca  es cuando llega a  una pagina  que  el usuario pide  y no encuentra
});
app.listen(3000);
console.log(`Server en el puerto ${3000}`);
