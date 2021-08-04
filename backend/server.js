/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './Router/UserRouter.js';
import ProductRouter from './Router/ProductRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/grifafro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', UserRouter);

app.use('/api/products', ProductRouter);

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