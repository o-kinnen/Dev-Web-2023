const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('C:\\Users\\admin\\Desktop\\ProjetWeb\\frontend'));

app.get('/', function (req, res) {
    res.sendFile('C:\\Users\\admin\\Desktop\\ProjetWeb\\frontend\\index.html');
});

app.listen(5000, () =>{
    console.log('Le serveur écoute sur le port 5000!');
});

// Route "produit"
app.get('/produit', async (req, res) => {
    try {
        const result = await db.pool.query("select * from produit");
        console.log(result);
        res.send(result);
    } catch (err) {
        throw err;
    }
});

