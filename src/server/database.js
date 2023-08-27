const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/cat-wiki', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error de conexión:', error);
  }
};




module.exports = connectDB;