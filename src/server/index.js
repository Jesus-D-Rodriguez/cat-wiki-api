const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Importa el paquete cors
const connectDB = require("./database.js");
const axios = require("axios");
const Cat = require("../server/models/Cat.js")

const corsOptions = {
  origin: 'http://localhost:5173', // Cambia esto con el origen de tu aplicación
};

app.use(cors(corsOptions));

app.use(require('./routes/routes.js'));

/*app.get('/', (req, res) => {
  res.send('Hello World!');
});*/

connectDB().then(() => {
  // Una vez que la conexión sea exitosa, iniciar el servidor Express

  axios.get("https://api.thecatapi.com/v1/breeds")
  .then(async (response) => {
    const breedsData = response.data;
    let xd = 0;
    for (const breed of breedsData) {
      const maxRetries = 3; // Número máximo de reintentos
      const retryDelay = 1000;
      if (breed.reference_image_id) {
        let retries = 0;
        let image;
        
        while (retries < maxRetries) {
          try {
            console.log("Referencia image id:", breed.reference_image_id);
    
            const response2 = await axios.get(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`);
            image = response2.data;
            console.log("image url: ",image.url);
            break; // Salir del bucle si la solicitud tiene éxito
    
          } catch (error) {
            console.error("Error al obtener la imagen. Intento:", retries + 1);
            retries++;
            await new Promise(resolve => setTimeout(resolve, retryDelay)); // Esperar antes de reintentar
          }
        }

        if (image) {
          const newCat = new Cat({
            id: breed.id,
            name: breed.name,
            cfa_url: breed.cfa_url,
            description: breed.description,
            temperament: breed.temperament,
            origin: breed.origin,
            life_span: breed.life_span,
            adaptability: breed.adaptability,
            affection_level: breed.affection_level,
            child_friendly: breed.child_firendly,
            grooming: breed.grooming,
            inteligence: breed.inteligence,
            health_issues: breed.health_issues,
            social_needs: breed.social_needs,
            stranger_friendly: breed.stranger_friendly,
            reference_image_id: breed.reference_image_id,
            image_url: image.url
          });

          await newCat.save();
        } else {
          xd = xd + 1;
          console.log("No hubo imagen ni gato: ", breed.name)
        }

      }
      



      
    }

    console.log("Datos de gatos guardados con éxito en la base de datos");
    console.log(`Numero de gatos que no se pudieron guardar ${xd}`);
  })
  .catch((error) => {
    console.error("Error al obtener los datos de la API:", error);
  });

  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });

});


/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`);
});*/
