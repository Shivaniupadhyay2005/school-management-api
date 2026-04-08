const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'BWLOHWMATaAAmlVVKjvkauQEWvWdASaU',
  database: 'railway',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to Railway MySQL');
  }
});

module.exports = connection;
