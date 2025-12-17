import {pool} from '../db.js';


//OBTENER DATOS
export const getProductos = async (req, res) => {
   const {rows} =  await pool.query('SELECT * FROM productos')
    res.json(rows);
}
//***********************************************************************/

//OBTENER DATOS POR ID
export const getProductosID = async (req, res) => {
    const {id} = req.params
    const {rows} =  await pool.query('SELECT * FROM productos WHERE id = $1', [id])

    if (rows.length === 0){
        return res.status(404).json({ message: "PRODUCTO NO ENCONTRADO"});
    }
    res.json(rows[0]);
}
//***********************************************************************/

//CREAR DATOS
export const crearProducto = async (req, res) => {
    const data = req.body;
    const {rows} = await pool.query(
        'INSERT INTO productos (nombre, categoria, ubicacion, precio) VALUES ($1, $2, $3, $4) RETURNING *',
        [data.nombre, data.categoria, data.ubicacion, data.precio]
    );
    return res.json(rows[0]);
}
//***********************************************************************/

//ELIMINAR DATOS
export const eliminarProducto = async (req, res) => {
    const {id} = req.params
    const { rowCount} =  await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *'
        , [id]);

    if (rowCount === 0){
    return res.status(404).json({ message: "PRODUCTO NO ENCONTRADO"});
    }
    return res.sendStatus(204);
}
//***********************************************************************/


export const actualizarProducto = async (req, res) => {
    const {id} = req.params
    const data = req.body;

    const {rows} = await pool.query('UPDATE productos SET nombre = $1, categoria = $2, ubicacion = $3, precio = $4 WHERE id = $5 RETURNING *' ,
        [data.nombre, data.categoria, data.ubicacion, data.precio, id]);

    return res.json(rows[0]);
}
//***********************************************************************/