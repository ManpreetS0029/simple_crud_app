const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect(
    'mongodb+srv://manpreetmatharoo2:iEVA84hUbkcFVVmS@backend.kibfau1.mongodb.net/?retryWrites=true&w=majority&appName=Backend'
  )
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Failed to connect to database');
  });
