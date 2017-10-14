const DBpassword = require('DBpassword');

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: DBpassword,
    database: 'node_with_mysql'
  }
}