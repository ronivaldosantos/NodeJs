//Criação do modelo da tabela para BD. Padrão inicia com letra maiúscula nome do arquivo
const sequelize = require("sequelize");
const connection = require('./database');
const { Sequelize } = require("sequelize");

const Resposta = connection.define("respostas",{
    corpo: {
        type: sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force:false});

module.exports = Resposta;