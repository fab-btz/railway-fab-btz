var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 30,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB_NAME,
    port: process.env.MYSQL_PORT,
    url: process.env.MYSQ_URL
})

pool.query = util.promisify(pool.query);

module.exports = pool;