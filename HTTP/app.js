var http = require("http"); // Importa o módulo nativo do Node.js

http.createServer( function(requisicao,resposta){
    // envida resposta para o usuário quando acessa o site.
    resposta.end("<h1>Meu primeiro acesso HTTP pelo Node.js</h1><h4>guiadoprogramador.com</h4>");
} ).listen(3000); //Cria um servidor na porta especificada.
console.log("Servidor em execução!");