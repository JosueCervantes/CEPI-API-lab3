//Fichier pour gerer le serveur local avec la envoie des images a l'api
//La basse de ce fichier c'est de Express.js

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const jsonServer = require('json-server');

const app = express();
const storage = multer.diskStorage({
    // Parametres pour la gestion des images
    destination: "media/", // Destination de l'image
    filename: (req, file, cb) => {
        // Obtien l'extension de l'image 
        const ext = path.extname(file.originalname); 
        // Creer le nom unique de l'image dans le dossier media
        cb(null, file.fieldname + "-" + Date.now() + ext); 
    },
});

const upload = multer({ storage: storage });


app.use(cors());
app.use(express.json());
//Route pour les images
app.use("/media", express.static(path.join(__dirname, "media")));

// Route pour envoyer les images vers l'api
app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Aucun fichier envoyé." });
    }
    // Renvoyer l'url de l'image
    res.json({ url: `/media/${req.file.filename}` });
});

// JSON Server
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use(router);

// Lancement du serveur
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});


