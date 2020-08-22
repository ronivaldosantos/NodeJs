//Importando bibliotecas.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Importando Rotas
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//Importando Models
const Articles = require('./articles/Article');
const Category = require('./categories/Category');

// View engine
app.set('view engine','ejs');

//Configurando para express trabalhar com arquivos estaticos
app.use(express.static('public'));

//Body parser para trabalhar com formulários e Json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Conectando ao banco de dados.

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão realizada com sucesso!!!");
    }).catch((error) =>{
        console.log(error);
    })

//Informando pra aplicação quais rotas utilizar.
app.use("/",categoriesController);
app.use("/",articlesController);

//criando rota principal
app.get("/",(req,res) => {
    res.render("index");
})

//Iniciando servidor
app.listen(8080,()=>{
    console.log("Servidor iniciado com sucesso!!!")
})