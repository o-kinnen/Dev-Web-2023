const mariadb = require('mariadb');
const fs = require('fs');
const dbConfig = fs.readFileSync('./config/configDb.txt', 'utf8');

// Connexion à la base de données
const pool = mariadb.createPool(JSON.parse(dbConfig));

// Expose une méthode pour établir une connexion avec MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
}); 






