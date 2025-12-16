import { Router } from "express"

const router = Router();

router.get('/users', (req, res) =>{
    res.send('OBTENIENDO USUARIOS')
})

router.get('/users/:id', (req, res) =>{
    const {id} = req.params;
    res.send('OBTENIENDO USUARIO' + id)
})

router.post('/users', (req, res) =>{
    res.send('CREANDO USUARIO')
})

router.delete('/users/:id', (req, res) =>{
    res.send('ELIMINANDO USUARIO')
})

router.put('/users/:id', (req, res) =>{
    const {id} = req.params;
    res.send('ACTUALIZANDO USUARIO')
})

export default router;