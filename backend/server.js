const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes.js');

const errorMiddleware = require('./middleware/errorMiddleware.js');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(errorMiddleware.notFound);

app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bold
    )
);
