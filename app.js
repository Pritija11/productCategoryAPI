const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());


const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');


app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;
