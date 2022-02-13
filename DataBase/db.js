const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodeCrudSequelize', 'root', 'pipoca150', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;