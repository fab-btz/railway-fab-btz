var pool = require('./db'); //llamamos la bd
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'SELECT * FROM users WHERE name = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows [0];
    }catch (error){
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }