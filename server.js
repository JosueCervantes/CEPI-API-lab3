const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const jsonServer = require('json-server');

const app = express();
const storage = multer.diskStorage({
    destination: "media/",
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Obtiene la extensión del archivo original
        cb(null, file.fieldname + "-" + Date.now() + ext); // Genera un nombre único con la extensión original
    },
});

const upload = multer({ storage: storage });


app.use(cors());
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));

// Ruta para subir imágenes
app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No se subió ninguna imagen." });
    }
    res.json({ url: `/media/${req.file.filename}` });
});

// JSON Server
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use(router);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});


