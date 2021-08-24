/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import UserRouter from './Router/UserRouter.js';
import ProductRouter from './Router/ProductRouter.js';
import OrderRouter from './Router/OrderRouter.js';
import UploadRouter from './Router/UploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/grifafro', {
  	useNewUrlParser: true,
  	useUnifiedTopology: true,
  	useCreateIndex: true,
});

app.use('/api/uploads', UploadRouter);

app.use('/api/users', UserRouter);

app.use('/api/products', ProductRouter);

app.use('/api/orders', OrderRouter);

app.get('/api/config/paypal', (req, res) => {
  	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => {
  	res.send('Server is ready');
});

app.use((err, req, res, next) => {
  	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  	console.log(`Serve at http://localhost:${port}`);
});