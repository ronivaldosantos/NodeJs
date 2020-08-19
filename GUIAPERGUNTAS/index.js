const express = require("express"); // Importando módulo express
const app = express(); // atribuindo express a uma variável
const bodyParser = require("body-parser"); //Recebe os dados enviados pelo FORM
const connection = require('./database/database'); // importando a conecção com o BD.

//Testando conexão com o banco de dados
connection
    .authenticate()
    .then(() =>{
        console.log('conexão ao BD realizada com sucesso!!!')
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })


//Informando ao express para utilizar o EJS como View engine, para renderizar html, ou seja desenhar páginas html.
app.set('view engine','ejs');

//Defini que a aplicação utilizará arquivos static, pasta padrão é public
app.use(express.static('public')); 

//Decodifica os dados enviados pelo formulário para estrutura JS
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROTAS
// IMPORTANTE: Todo arquivo html ou seja EJS deve estar obrigatóriamente dentro da pasta view.
app.get("/",(req,res)=>{ //Rota inicial do sistema

    // chama arquivo .ejs e renderiza na tela para o usuário. render vai direto na pasta views, para express
    res.render("index",{
    });
});

//Rota para formulário de perguntas perguntas.
app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
})

//Rota para obter dados enviados pelo formulário
//Essa rota é POST devido o método do FORM ser do tipo POST.
app.post("/salvarpergunta",(req,res)=>{

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Fomulário recebido! Titulo: " + titulo + " Descricao: " + descricao);
})




// iniciando o servidor.
app.listen(8080,()=>{ 
    console.log("App rodando!");
})