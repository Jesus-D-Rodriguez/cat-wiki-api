const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Importa el paquete cors
const connectDB = require("./database.js");

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
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
});

/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`);
});*/
