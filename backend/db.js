const mariadb = require('mariadb');

// Connexion à la base de données
const pool = mariadb.createPool({
    host: 'localhost',
    port : '4000',
    user: 'root',
    password: 'root',
    database: 'sotrexco',
});

// Expose une méthode pour établir une connexion avec MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
});