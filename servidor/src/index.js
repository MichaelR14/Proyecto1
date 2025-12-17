import express from 'express';
import { PORT } from './config.js';
import productosRoutes from './routes/producto.routes.js';
import morgan from "morgan";

const app = express()

app.use(express.json());
app.use(productosRoutes);
app.use(morgan('dev'));



app.listen(PORT)
console.log('SERVIDOR EN EL PUERTO', PORT)

