const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        database: "burger_db",
        user: "root",
        port: 3300,
        password: "rootroot"
    });
}


module.exports = connection;