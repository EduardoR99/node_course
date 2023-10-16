const Sequelize = require('sequelize');

const connection = Sequelize('guiaperguntas', 'root', 'Edma@2308', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;