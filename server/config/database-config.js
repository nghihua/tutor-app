const pg = require('pg');
require('dotenv').config();

const Pool = require('pg').Pool

/*const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})*/

const pool = new Pool({
	connectionString: process.env.DATABASE_STRING,
	ssl: {
    		rejectUnauthorized: false // don't check for SSL cert
  	}
});

console.log(pool);

module.exports = pool;
