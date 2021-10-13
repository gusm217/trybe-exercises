const mysql = require('mysql2/promise');

const DATABASE = process.env;

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DATABASE });

module.exports = connection;