var pool = require('./db');

async function getProjects() {
    var query = 'SELECT * FROM projects ORDER BY id ASC';
    var rows = await pool.query(query);
    return rows;
}

async function insertProject(obj) {
    try {
        var query = 'INSERT INTO projects set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProject(id) {
    var query = 'DELETE FROM projects WHERE  id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getProjectById(id) {
    var query = 'SELECT * FROM projects WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editProject(obj, id) {
    try {
        var query = 'UPDATE projects SET ? WHERE id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getProjects, insertProject, deleteProject, getProjectById, editProject }