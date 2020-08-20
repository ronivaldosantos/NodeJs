const express = require("express"); // Importando módulo express
const app = express(); // atribuindo express a uma variável
const bodyParser = require("body-parser"); //Recebe os dados enviados pelo FORM
const connection = require('./database/database'); // importando a conecção com o BD.

//Tabelas do BD - Importando a criação da tabela.
const Pergunta = require("./database/Pergunta"); 
const Resposta = require("./database/Resposta");

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

//************** ROTAS *******************

//Rota para formulário de perguntas perguntas.
app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
})

//Rota para obter dados enviados pelo formulário
//Essa rota é POST devido o método do FORM ser do tipo POST.
app.post("/salvarpergunta",(req,res)=>{

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //Salvando dados do formulário no BD equivalente ao Insert Into
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    // Após a inserção dos dados redireciona para a página principal
    }).then(()=>{
        res.redirect("/");
    });    
});

// IMPORTANTE: Todo arquivo html ou seja EJS deve estar obrigatóriamente dentro da pasta view.
app.get("/",(req,res)=>{ //Rota principal inicial  do sistema
 
    //Obtem todas as perguntas cadastradas no BD ordenados decrescente.
    // O JSON raw:true informa que trará somente os registros da tabela.
    Pergunta.findAll({raw: true,order:[
        ['id','DESC']
    ]}).then(perguntas =>{

        // chama arquivo .ejs e renderiza na tela para o usuário. render vai direto na pasta views, para express
        res.render("index",{
            perguntas:perguntas // Envia array com registros do BD para a página Index.ejs
        });    

    });
});

app.get("/pergunta/:id",(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then( pergunta => {
        if (pergunta != undefined){

            //obtendo respostas da pergunta.
            Resposta.findAll({
                where: { perguntaId: pergunta.id }, 
                order: [ ['id','DESC'] ]

            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas:respostas 
                });
            });
        }else{
            res.redirect("/");
        }
    });
});

//Rota para responder perguntas.
app.post("/responder",(req,res)=>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+ perguntaId);
    });
});



// iniciando o servidor.
app.listen(8080,()=>{ 
    console.log("App rodando!");
})