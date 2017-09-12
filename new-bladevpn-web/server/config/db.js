const Sequelize = require('sequelize');
const config = require('./config');

var db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

module.exports = db;
