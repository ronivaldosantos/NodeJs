const Sequelize = require("sequelize");
const connection = require("../database/database");

//Criando estrutura da tabela.

const Category = connection.define('categories',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {  
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Sincronizando no BD.
//Category.sync({force:true});

module.exports = Category;
