const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL");

  const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS course`;

  conn.query(createDatabaseQuery, (err, result) => {
    if (err) {
      console.error("Error creating database: ", err);
      return;
    }
    console.log("Database created successfully");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        thumbnail VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    conn.query(createTableQuery, (err, result) => {
      if (err) {
        console.error("Error creating courses table: ", err);
        return;
      }
      console.log("Courses table created successfully");
    });
  });
});

module.exports = conn;
