//Importando a biblioteca do Express
const express = require("express");
const app = express(); // Função que vai carregar toda funcionalidade do Express

//Criando rota para iniciar aplicativo. 
//Toda rota criada deve devolver uma reposta. que pode ser um texto, uma página html, etc...
// Cada rota só pode conter uma única resposta.
app.get("/",function(req,res){
    res.send("<h1>Bem vindo a minha página!</h1><h4>Ronivaldo</h4>"); //Envia resposta da requisição de acesso ao app    
})

//"/:artigo?" Significa que o parâmetro é opcional
app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if (artigo){
        res.send("<h2>Artigo " + artigo + " </h2>");
    } else{
        res.send("<h3>Bem vindo ao meu blog!</h3>");
    }

});

// Utilizando QueryParams, Obs: Não são muito usuais é mais comum os parâmetros de rota.

app.get("/canal/youtube",function(req,res){

    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    } else {
        res.send("Não foi enviado nenhum canal.");
    }
});

//quando coloca "/:nome" é o parâmetro que a rota irá receber do usuário
app.get("/ola/:nome/:empresa",function(req,res){
    //REQ => Dados enviados pelo usuário
    //RES=> Resposta que será enviada para o usuário

    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Oi " + nome + ", da empresa: " + empresa + " seja bem vindo!</h1>")
})


// iniciando servidor.
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu erro ao iniciar o servidor!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})