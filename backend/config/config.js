require('dotenv').config()

module.exports = {
  test: {
    username: 'root',
    password: '',
    database: 'sample_project',
    host: 'localhost',
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
}
