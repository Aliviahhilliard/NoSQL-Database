const express = require('express');
const routes = require('./routes'); 
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); 

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

mongoose.connect('mongodb://localhost/social-network', {
});

// app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`API server is running on ${PORT}`);
});
