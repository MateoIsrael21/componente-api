const express = require('express');
const app = express();
const port = 3000;

// Datos de ejemplo
const productos = [
  { id: 1, nombre: 'Producto 1', precio: 100, imagen: 'https://via.placeholder.com/150', stock: 10 },
  { id: 2, nombre: 'Producto 2', precio: 150, imagen: 'https://via.placeholder.com/150', stock: 5 },
  { id: 3, nombre: 'Producto 3', precio: 200, imagen: 'https://via.placeholder.com/150', stock: 2 },
];

// Endpoint para obtener los productos
app.get('/products', (req, res) => {
  res.json(productos);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
