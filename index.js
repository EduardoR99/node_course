const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// usando express e EJS como view engine
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("", (req, res) => {
  
  res.render("index");
});

app.get("/perguntar",(req, res)=>{
  res.render("perguntar")
})

app.post('/salvarPergunta', (req, res) =>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(`Formulário recebido! ${titulo} - ${descricao}`);
  
})

app.listen(3000, () => {
  console.log("App rodando!");
});
