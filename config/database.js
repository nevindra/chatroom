/*
TODO:
    - Make sequalize database
 */

const Sequalize = require('sequelize')

require('dotenv').config()

const sequalize = new Sequalize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    timezone: '+05.00',
});

module.exports = sequalize