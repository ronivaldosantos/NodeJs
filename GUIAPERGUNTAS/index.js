const express = require("express"); // Importando módulo express
const app = express(); // atribuindo express a uma variável

//Informando ao express para utilizar o EJS como View engine, para renderizar html, ou seja desenhar páginas html.
app.set('view engine','ejs');

//Defini que a aplicação utilizará arquivos static, pasta padrão é public
app.use(express.static('public')); 


// IMPORTANTE: Todo arquivo html ou seja EJS deve estar obrigatóriamente dentro da pasta view.
app.get("/",(req,res)=>{ //Rota inicial do sistema

    // chama arquivo .ejs e renderiza na tela para o usuário. render vai direto na pasta views, para express
    res.render("index",{
    });
});

// iniciando o servidor.
app.listen(8080,()=>{ 
    console.log("App rodando!");
})