const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'StayTech1995',
  database: 'users-crud'
})

module.exports = db