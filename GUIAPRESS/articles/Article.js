const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")


//Criando estrutura da tabela.

const Article = connection.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {  
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})


//********* Definição de relacionamento de Um para muitos. ******
//Uma Categoria tem muitos Artigos.
Category.hasMany(Article);  

//********* Definição de relacionamento de Um para muitos. *******
//Um Artigo pertence a uma Categoria
Article.belongsTo(Category);

//Sincronizando no BD.
Article.sync({force:true});

module.exports = Article;
