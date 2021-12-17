const pg = require('pg');

const Pool = require('pg').Pool

/*const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})*/

const pool = new Pool({
	connectionString: "***REMOVED***",
	ssl: {
    		rejectUnauthorized: false // don't check for SSL cert
  	}
});

module.exports = pool;
