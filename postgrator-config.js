require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "host": process.env.MIGRATION_DB_HOST || 'ruby.db.elephantsql.com',
  "port": process.env.MIGRATION_DB_PORT || 5432,
  "database": process.env.MIGRATION_DB_NAME || 'juecbrnl',
  "username": process.env.MIGRATION_DB_USER || 'juecbrnl',
  "password": process.env.MIGRATION_DB_PASS  || 'tqPAgcx-60LiCOUya4MbvMTJBZbaYjE5',
}
