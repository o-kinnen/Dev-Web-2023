const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000!');
});

// Route "produit" pour récupérer tous les produits
app.get('/produits', async (req, res) => {
  try {
    const result = await db.pool.query("select * from tb_produits");
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "produit" pour récupérer un produit par son id
app.get('/produits/id', async (req, res) => {
  const id = req.query.valeur;
  try {
    const result = await db.pool.query("select * from tb_produits where id_produit =?", id);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "produit" pour récupérer un produit par son nom
app.get('/produits/nom', async (req, res) => {
  const nom = req.query.valeur;
  try {
    const result = await db.pool.query("select * from tb_produits where nom =?", nom);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "produit" pour ajouter un produit
app.post('/produits/:nom', async (req, res) => {
  const nom_produit = req.params.nom;
  try {
    const result = await db.pool.query(
      'INSERT INTO tb_produits (nom) VALUES (?)', nom_produit);
    console.log(result);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route "produit" pour supprimer un produit par son id
app.delete('/produits/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.pool.query('DELETE FROM tb_produits WHERE id_produit = ?', id);
    console.log(result);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route "produit" pour mettre à jour un produit par son id
app.put('/produits/:id', async (req, res) => {
  const id = req.params.id;
  const nom_produit = req.body.nom;
  try {
    const result = await db.pool.query(
      'UPDATE tb_produits SET nom = ? WHERE id_produit = ?',
      [nom_produit, id]
    );
    console.log(result);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//Route "client" pour afficher tous les clients
app.get("/clients", async (req, res) => {
  try {
    const result = await db.pool.query("select * from tb_clients");
    res.json(result)
  }
  catch (e) {
    console.error(e)
  }
})
//route pour récup un seul client
app.get("/clients/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.pool.query("select * from tb_clients where id_client=?", id);
    res.json(result)
  }
  catch (e) {
    console.error(e)
  }
})

// Route "réalisation" pour récupérer toutes les réalisations
app.get('/realisation', async (req, res) => {
  try {
    const result = await db.pool.query("select * from tb_realisations");
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "réalisation" pour récupérer une réalisation par son id
app.get('/realisation/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.pool.query("select * from tb_realisations where id_realisation =?", id);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "service" pour récupérer tous les services
app.get('/service', async (req, res) => {
  try {
    const result = await db.pool.query("select * from tb_services");
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Route "service" pour récupérer un service par son id
app.get('/service/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.pool.query("select * from tb_services where id_service =?", id);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

