const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.MYSQL_PUBLIC_URL);

connection.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to Railway MySQL');
  }
});

module.exports = connection;
