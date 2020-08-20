//Criação do modelo da tabela para BD. Padrão inicia com letra maiúscula nome do arquivo
const sequelize = require("sequelize");
const connection = require('./database');

//Criação da tabela no BD.
const pergunta = connection.define('perguntas',{
    titulo:{
        type :sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull:false
    }
})

//Caso não exista a tabela no BD a mesma é criada.
pergunta.sync({force: false}).then(()=>{});