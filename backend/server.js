const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const jose = require("jose");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000!');
});

// Route "creationCompte" pour ajouter un utilisateur
app.post('/creationCompte', async (req, res) => {
  const nom = req.body.nom;
  const mdp = req.body.mdp;
  const role = req.body.role;
  const fonction = req.body.fonction;
  const telephone = req.body.telephone;
  const nom_societe = req.body.nom_societe;
  const mail_client = req.body.mail_client;
  const prenom = req.body.prenom;
  try {
    const result = await db.pool.query(
      'INSERT INTO tb_utilisateur (nom, mdp, role, fonction, telephone, nom_societe, mail_client, prenom) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nom, mdp, role, fonction, telephone, nom_societe, mail_client, prenom]);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route "connexionCompte" pour qu'un utilisateur puisse se connecter
app.post('/connexionCompte', async (req, res) => {
  const mdp = req.body.mdp;
  const mail_client = req.body.mail_client;
  try {
    const result = await db.pool.query(
      'SELECT * FROM tb_utilisateur WHERE mdp=? AND mail_client=?', [mdp, mail_client]);
    //N'existe pas dans la table à améliorer car hardcodé
    if (result.length === 0){
      res.sendStatus(500);
    }
    else {
      console.log(result);
      res.send(result);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Route "infos" afficher les infos du compte
/*app.post('/infos', async (req, res) => {
  const mdp = req.body.mdp;
  const mail_client = req.body.mail_client;
  console.log(mdp);
  console.log(mail_client);
  try {
    const result = await db.pool.query(
      'SELECT nom, prenom, nom_societe, fonction, telephone, mail_client FROM tb_utilisateur WHERE mdp=? AND mail_client=?', [mdp, mail_client]);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});*/

// Route "infos" pour récupérer toutes les infos
app.get('/infos', async (req, res) => {
  const mdp = req.body.mdp;
  const mail_client = req.body.mail_client;
  try {
    const result = await db.pool.query(
      'SELECT * FROM tb_utilisateur WHERE mdp=? AND mail_client=?', [mdp, mail_client]);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
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
    res.sendStatus(201);
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
    const result = await db.pool.query("select * from tb_utilisateur");
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
    const result = await db.pool.query("select * from tb_utilisateur where id_client=?", id);
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

//on va devoir hacher le mdp
app.post('/login', async (req, res) => {
    const mail = req.body.mail;
    const mdp = req.body.mdp;
    try {
        const result = await db.pool.query(
            "select mail_client from tb_utilisateur where mail_client =? and mdp =?", [mail, mdp]
        );//rajouter dans le select
        if (result.length > 0){
            const secret = new TextEncoder().encode(
                'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
            )
            const alg = 'HS256'

            const jwt = await new jose.SignJWT({ "role": ["admin"] }) //mettre à droite de rôle : result[0].role
                .setProtectedHeader({ alg })
                .setIssuedAt()
                .setSubject(mail)
                .setExpirationTime('2h')
                .sign(secret)

            res.setHeader("Authorization", jwt)
            res.sendStatus(201)
        }
        else {
            res.sendStatus(401);// non authorisée
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500)// erreur dans le processus;
    }
});