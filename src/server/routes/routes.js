const {Router} = require("express");
const router = Router();
const axios = require('axios');
const Cat = require('../models/Cat');



router.get('/', async (req, res)=> {
    try {
        const apiUrl = 'https://api.thecatapi.com/v1/breeds';
        const response = await axios.get(apiUrl);
        const breedsData = response.data;
        const savedCats = [];
        for (const breed of breedsData) {
            const newCat = new Cat({
                id: breed.id,
                name: breed.name,
                cfa_url: breed.cfa_url,
                temperament: breed.temperament,
                origin: breed.orign,
                life_span: breed.life_span,
                adaptability: breed.adaptability,
                affection_level: breed.affection_level,
                child_friendly: breed.child_firendly,
                grooming: breed.grooming,
                inteligence: breed.inteligence,
                health_issues: breed.health_issues,
                social_needs: breed.social_needs,
                stranger_friendly: breed.stranger_friendly,
            });

            await newCat.save();
            savedCats.push(newCat);
        }
        res.json(savedCats);
        console.log("Datos de gatos guardados con exito");
    } catch (error) {
        console.error('Error al obtener los datos de la API o guardar en la base de datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API o guardar en la base de datos' });

    }
});

module.exports = router;