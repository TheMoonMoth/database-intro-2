require("dotenv").config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/8080'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: ''
    }
  }

}
