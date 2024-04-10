import express from 'express';
import router from './routes/routes.js';
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/',router);


app.listen(PORT, ()=> console.log(`Servidor conectado a puerto: http://localhost:${PORT}/`));