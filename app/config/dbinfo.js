// Telling JavaScript to require mySQL in the script
const mysql = require('mysql');

// The connection infor for the database
const db = mysql.createConnection({
    host: 'mysql12523.mysql.database.azure.com',
    user: 'USER',
    password: 'PWD',
    database: 'DB'
  });

// Function for connecting to the database with error handling if connection fails
db.connect((error) => {
    if(error){
        console.error('Database connection error:', error);
    }
    else{
        console.log('Connected to the database');
    }
});

// Making the databse connection available for use in other JavaScript files
module.exports = db;