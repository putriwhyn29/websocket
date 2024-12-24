const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'websocket',
});

db.connect((err) => {
  if (err) {
    console.error('Error koneksi MySQL: ', err);
  } else {
    console.log('Terhubung ke MySQL');
  }
});

module.exports = db;
