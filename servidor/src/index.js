import express from 'express';
import { PORT } from './config.js';
import productosRoutes from './routes/producto.routes.js';
import morgan from "morgan";
import cors from "cors";

const app = express()

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(productosRoutes);




app.listen(PORT)
console.log('SERVIDOR EN EL PUERTO', PORT)

