const path = require('path');

module.exports = {
  entry: './stories/Components/index.js',  // Punto de entrada principal de tu aplicación
  output: {
    filename: 'bundle.js',  // Archivo resultante de la minificación
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
  },
  mode: 'production',  // Modo de producción para minificar
};
