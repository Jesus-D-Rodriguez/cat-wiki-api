const mongoose = require('mongoose');

const connectDB = async () => {

  const uri = "mongodb+srv://root:1234@cat-wiki-db.axsvspt.mongodb.net/?retryWrites=true&w=majority";
  const uri2 = 'mongodb://127.0.0.1:27017/cat-wiki';
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error de conexión:', error);
  }
};




module.exports = connectDB;