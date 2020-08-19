const express = require("express"); // Importando módulo express
const app = express(); // atribuindo express a uma variável

//Informando ao express para utilizar o EJS como View engine, para renderizar html, ou seja desenhar páginas html.
app.set('view engine','ejs');


// IMPORTANTE: Todo arquivo html ou seja EJS deve estar obrigatóriamente dentro da pasta view.
app.get("/:nome/:lang",(req,res)=>{ //Rota inicial do sistema

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

//Criando um array de produtos.
    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Coca-cola",preco: 5},
        {nome: "Leite",preco: 1.45},
        {nome: "Carne",preco: 15},
        {nome: "Cerveja",preco: 9},
    ];    

    // chama arquivo .ejs e renderiza na tela para o usuário. render vai direto na pasta views, para express
    res.render("index",{
        //Passando variáveis para o html.
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8050,
        msg: exibirMsg,
        produtos:produtos

    });
});

// iniciando o servidor.
app.listen(8080,()=>{ 
    console.log("App rodando!");
})