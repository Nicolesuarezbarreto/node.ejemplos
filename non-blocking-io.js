const fs = require('fs');

// Operación de lectura asíncrona (non-blocking)
console.log('Iniciando la lectura del archivo...');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  console.log('Contenido del archivo:', data);
});

// Otras tareas mientras esperamos la lectura del archivo
console.log('Mientras se lee el archivo, puedo hacer otras cosas...');
