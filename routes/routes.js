import express from 'express';
import path from 'path';
import { getRutinas, agregarRutinas } from '../queries/consultas.js';

const router = express.Router();
const __dirname = import.meta.dirname


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

router.get('/rutinas', async (req,res)=>{
    const mostrarRutinas = await getRutinas();
    res.json(mostrarRutinas);
})

router.post('/agregaRutina', async (req,res)=>{
    const datos = Object.values(req.body);
    console.log(datos);
    const result = await agregarRutinas(datos);

    res.json(result);
})

router.get('*', (req,res)=>{
    res.status(400);
    res.send('None shall pass');
})



export default router;