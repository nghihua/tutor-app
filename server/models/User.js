const pool = require('../config/database-config');

const signup = async (email, password, full_name, major, intake, is_volunteer, callback) => {
  pool.query('INSERT INTO users (email, password, full_name, major, intake, is_volunteer) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id', [email, password, full_name, major, intake, is_volunteer], (error, results) => {
    callback(error, results);
  });
}

const login = async (email, password, callback) => {
  pool.query('SELECT * FROM users WHERE email=$1', [email], (error, results) => {
    callback(error, results);
  });
}

const get_by_id = async (user_id, callback) => {
  pool.query('SELECT * FROM full_info WHERE user_id=$1', [user_id], (error, results) => {
    callback(error, results);
  });
}

const update_info = async (user_id, full_name, major, intake, is_volunteer, subject) => {
	console.log(user_id, full_name, major, intake, is_volunteer, subject);
  //console.log(error);
  try {
    await pool.query('BEGIN;');
    await pool.query(`UPDATE users SET full_name = $1, major = $2, intake = $3, is_volunteer = $4 WHERE user_id=$5;`, [full_name, major, intake, is_volunteer, user_id]);
    await pool.query(`DELETE FROM tutor_subject WHERE tutor_id = $1;`, [user_id]);
    await pool.query(`INSERT INTO tutor_subject (tutor_id, subject)
    			SELECT $1, UNNEST($2::text[])`, [user_id, subject]);
    await pool.query('COMMIT;');
  }
  catch (e) {
    throw e;
  }
}

module.exports = {login, signup, get_by_id, update_info};
