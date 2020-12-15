// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seed: {
      directory: ' ./data/seeds'
    }
  },

  staging: {
  },

  production: {
  }

};
