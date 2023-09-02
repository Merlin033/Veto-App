const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Autorisez les requêtes CORS
app.use(cors());

// PostgreSQL configuration
const pgp = require('pg-promise')();
const db = pgp({
    connectionString: 'postgres://postgres:aqwxsz360.@localhost:5432/veterinany_clinic',
    ssl: false // Assurez-vous d'ajuster la configuration de sécurité en production
});

// Routes à ajouter ici

// Test de connexion à la base de données
app.get('/test-db-connection', async (req, res) => {
    try {
        const result = await db.one('SELECT $1 AS message', ['Connexion à la base de données réussie']);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la connexion à la base de données' });
    }
});

// Récupérer la liste des clients
app.get('/clients', async (req, res) => {
    try {
        const clients = await db.any('SELECT * FROM clients');
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des clients' });
    }
});
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

