const express = require("express");
const path = require("path")
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));

app.get("/contacto", (req, res) => res.sendFile(path.join(__dirname, "/views/contacto.html")));

app.get("/aboutus", (req, res) => res.sendFile(path.join(__dirname, "/views/aboutus.html")));

app.get("/products", (req, res) => res.sendFile(path.join(__dirname, "/views/products.html")));

app.listen("3000", () => {
    console.log("Servidor iniciado al 3000")
});