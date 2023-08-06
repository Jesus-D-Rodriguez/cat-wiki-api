const {Router} = require("express");
const router = Router();
const axios = require('axios');


router.get('/', async (req, res)=> {
    try {
        const apiUrl = 'https://api.thecatapi.com/v1/breeds';
        const response = await axios.get(apiUrl);
        const breedsData = response.data;
        res.json(breedsData);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });

    }
});

module.exports = router;