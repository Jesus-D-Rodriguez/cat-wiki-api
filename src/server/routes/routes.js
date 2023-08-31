const {Router} = require("express");
const router = Router();
const axios = require('axios');
const Cat = require('../models/Cat');





router.get('/', async (req, res)=> {
    try {
        // Consulta la base de datos para obtener los datos de los gatos almacenados
        const savedCats = await Cat.find();
        res.json(savedCats);
      } catch (error) {
        console.error("Error al obtener los datos de la base de datos:", error);
        res.status(500).json({ error: "Error al obtener los datos de la base de datos" });
      }
});

router.get("/cat/:catName", async (req, res) => {
    try {
        const catName = req.params.catName;
    
        const cat = await Cat.findOne({ name: catName});


        if (!cat) {
            res.status("Cat not found")
        }

        res.json(cat)
    } catch (error) {
        console.error("Error al obtener información del gato:", error);
        res.status(500).json({ error: "Error al obtener información del gato" });
    }
})


router.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // O simplemente res.end();
});

module.exports = router;