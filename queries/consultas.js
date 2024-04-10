import pool from '../config/db.js'

//query para crear rutinas
const agregarRutinas = async ()=>{
    try{
        const consultaRutinas = {
            text: '',
            values: '',
        }
    }catch(err){
        console.log(err)
    }
}

//query para obtener registros
const getRutinas = async ()=>{
    try{
        const consultaRutinas = {
            text:'select * from ejercicios;'
        }
        const result = await pool.query(consultaRutinas);
        console.log(result.rows);
        return result.rows;

    }catch(err){
        console.log(err)
    }
}

export {getRutinas, agregarRutinas};