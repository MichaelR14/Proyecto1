import { Router } from "express";
import { actualizarProducto, crearProducto, 
        eliminarProducto, getProductos, 
        getProductosID } from "../controllers/producto.controllers.js"; 

const router = Router();

//OBTENER DATOS
router.get('/productos', getProductos);
//********************************************************************** */

//OBTENER DATOS POR ID
router.get('/productos/:id', getProductosID);
//********************************************************************** */

//CREAR DATOS
router.post('/productos', crearProducto);
//********************************************************************** */

//ELIMINAR DATOS
router.delete('/productos/:id', eliminarProducto);
//********************************************************************** */

//ACTUALIZAR DATOS
router.put('/productos/:id', actualizarProducto);
//********************************************************************** */

export default router;