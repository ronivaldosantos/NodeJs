const Sequelize = require("sequelize");

//Conexão BD
const connection = new Sequelize('guiapress','developer','878124',{
    host: 'localhost',
    dialect: 'mysql'
});

//Exporta conexão para utilizar em todo app.
module.exports = connection;