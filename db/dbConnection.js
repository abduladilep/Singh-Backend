const mysql = require('mysql2');  // Use require instead of import

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user_auth',
    password:'Adil@7165',
    database: 'user_authentication',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

module.exports = db;  