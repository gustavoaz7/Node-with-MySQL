const DB = require('./DBpassword');

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: DB.password,
    database: 'node_with_mysql'
  }
}