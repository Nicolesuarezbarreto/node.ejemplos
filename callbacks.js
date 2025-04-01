// Simulando una operación asíncrona (como leer un archivo)
function leerArchivo(nombreArchivo, callback) {
    console.log(`Leyendo el archivo: ${nombreArchivo}...`);
  
    // Simulando un retraso con setTimeout (de 2 segundos)
    setTimeout(() => {
      console.log(`Archivo ${nombreArchivo} leído con éxito.`);
      // Ejecuatamos el callback al finalizar
      callback(nombreArchivo);
    }, 2000);
  }
  
  // Función de callback
  function archivoLeido(nombreArchivo) {
    console.log(`El archivo "${nombreArchivo}" ha sido procesado.`);
  }
  
  // Llamamos a la función con un archivo y el callback
  leerArchivo('documento.txt', archivoLeido);
  