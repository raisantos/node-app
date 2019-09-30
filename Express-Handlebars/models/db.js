const Sequelize = require('sequelize');

//conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'raisantos', 'santosfc', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}