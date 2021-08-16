const { db } = require("./.env.database")

module.exports = {
  client: "postgresql",
  connection: db,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
}
