import express from 'express'
import { PORT } from './config.js'
import userRoutes from './routes/user.routes.js'

//CREAMOS EL SERVIDOR
const app = express();

app.use(userRoutes)

app.listen(PORT, () => {
    console.log('SERVIDOR CONECTADO CORRECTAMENTE EN EL PUERTO', PORT)
})
