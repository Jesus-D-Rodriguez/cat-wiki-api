const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Importa el paquete cors
const connectDB = require("./database.js");
const axios = require("axios");
const Cat = require("../server/models/Cat.js")

const url = 'https://cat-wiki-zlzc.onrender.com';
const local = 'http://localhost:5173';

const corsOptions = {
  origin: local, 

};

app.use(cors(corsOptions));

const xd = "xd";

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
        const existingCats = await Cat.find();
        
        while (retries < maxRetries) {
          try {

            let image;

            let response_images;
            //console.log("Referencia image id:", breed.reference_image_id);
            const API_KEY = "live_GO6QtjM1mtzVMLBqc6kwZmzWvCZZnIl6xrdM9xR0mtOWcDz4pkWZMa7HZwDuJ8Xa";
            const n_images = 8;
            const images_url_1 = `https://api.thecatapi.com/v1/images/search?limit=${n_images}&breed_ids=${breed.id}&api_key=${API_KEY}`;

    
            const response2 = await axios.get(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`);
            const response3 = await axios.get(images_url_1);
            response_images = response3.data;
            //console.log("Response 3 " + response3.data.length + " "+ images_url_1);
            image = response2.data;
            
            //console.log("image url: ",image.url);

            if (image) {

              const existingCat = await Cat.findOne({ id: breed.id });
              if (!existingCat) {
                //console.log("GUARDADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
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
                  child_friendly: breed.child_friendly,
                  grooming: breed.grooming,
                  intelligence: breed.intelligence,
                  health_issues: breed.health_issues,
                  social_needs: breed.social_needs,
                  stranger_friendly: breed.stranger_friendly,
                  reference_image_id: breed.reference_image_id,
                  image_url: image.url,
                  images_1:(response_images.length > 0)? response_images[0].url : null,
                  images_2:(response_images.length > 1)? response_images[1].url : null,
                  images_3:(response_images.length > 2)? response_images[2].url : null,
                  images_4:(response_images.length > 3) ? response_images[3].url : null,
                 images_5:(response_images.length > 4) ? response_images[4].url : null,
                  images_6:(response_images.length > 5) ? response_images[5].url : null,
                  images_7:(response_images.length > 6) ? response_images[6].url : null,
                  images_8:(response_images.length > 7)  ? response_images[7].url : null
                });
  
                await newCat.save();
  
                break; 
              }


            } else {
              xd = xd + 1;
              console.log("No hubo imagen ni gato: ", breed.name)
            }
    
    
          } catch (error) {
            console.error("Error al obtener la imagen. Intento:", retries + 1);
            retries++;
            await new Promise(resolve => setTimeout(resolve, retryDelay)); // Esperar antes de reintentar
          }
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
