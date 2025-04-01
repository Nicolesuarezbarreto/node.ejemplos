// Simulando una operación asíncrona que devuelve una promesa
function leerArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
      console.log(`Leyendo el archivo: ${nombreArchivo}...`);
  
      // Simulamos un retraso de 2 segundos (como si estuviéramos leyendo el archivo)
      setTimeout(() => {
        const exito = true; // Supongamos que el archivo se lee con éxito
  
        if (exito) {
          resolve(`Archivo ${nombreArchivo} leído con éxito.`); // Promesa resuelta
        } else {
          reject('Error al leer el archivo'); // Promesa rechazada
        }
      }, 2000);
    });
  }
  
  // Usando async/await para manejar la promesa
  async function procesarArchivo() {
    try {
      const resultado = await leerArchivo('documento.txt'); // Esperamos la resolución de la promesa
      console.log(resultado); // Se ejecuta si la promesa se resuelve
    } catch (error) {
      console.log(error); // Se ejecuta si la promesa es rechazada
    }
  }
  
  procesarArchivo(); // Llamamos a la función asíncrona
  