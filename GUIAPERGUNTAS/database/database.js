const sequelize = require('sequelize');
const connection = new sequelize('guiaperguntas','developer','878124',{
    host: 'localhost',
    dialect: 'mysql'
})

//Exporta connection para utilizar em outros pontos do sistema,
module.exports = connection;