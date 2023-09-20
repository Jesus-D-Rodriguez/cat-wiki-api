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


router.put('/incrementSearchCount/:catName', async (req, res) => {
    try {
        const catName = req.params.catName;
        
        // Busca el gato en la base de datos por su nombre
        const cat = await Cat.findOne({ name: catName });

        if (!cat) {
            return res.status(404).json({ error: "Cat not found" });
        }

        // Incrementa el contador de búsqueda
        cat.search_count += 1;

        // Guarda los cambios en la base de datos
        await cat.save();

        res.json({ message: "SearchCount incrementado exitosamente" });
    } catch (error) {
        console.error("Error al incrementar el searchCount:", error);
        res.status(500).json({ error: "Error al incrementar el searchCount" });
    }
});


router.get('/most_searched', async(req, res)=>{
    try {
        const most_searched_cats = await Cat.find().sort({ search_count: -1 }).limit(10);
        res.json(most_searched_cats);
    } catch (error) {
        console.error("Error al obtener los gatos más buscados:", error)
        res.status(500).json({ error: "Error al obtener los gatos más buscados" });
    }
})

router.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // O simplemente res.end();
});

module.exports = router;