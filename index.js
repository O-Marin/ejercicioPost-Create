import express from 'express';
import router from './routes/routes.js';
import path from 'path';
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname

//Carpeta publica
app.use(express.static(path.join(__dirname, 'assets')));

//middleware
app.use(express.json());

//Rutas
app.use('/',router);


app.listen(PORT, ()=> console.log(`Servidor conectado a puerto: http://localhost:${PORT}/`));