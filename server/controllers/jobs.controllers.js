import { format } from "fecha"
import { pool } from "../conexionBD.js"
import { json } from "express"

export const getJobs = async (req, res)=>{
    // throw new Errpr("Error de conexion")
    try {
        const [result] = await pool.query('SELECT * FROM jobs ORDER BY createdAt ASC')        
        // res.json(result)
        //para enviar una fecha con formato distinto a 2024-03-19T17:25:38.000Z
        const newResult = result.map((elemento) => {
            const nuevo = {
                id: elemento.id,
                title: elemento.title,
                description: elemento.description,
                done: elemento.done,
                createdAt: format( elemento.createdAt, 'isoDate')
            }
            return nuevo
        })

        res.json(newResult)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getJob = async (req, res)=>{
    try {
        const [result] = await pool.query('SELECT * FROM jobs WHERE id=?', [req.params.id]);

        if(result.length === 0){
            return res.status(404).json({message: "Trabajo no encontrado"});
        }
    
        res.json(result[0]);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createJob = async (req, res)=>{
    try {
        const {title, description} = req.body;
        const [respuesta] = await pool.query('INSERT INTO jobs(title, description) VALUES (?,?)', [title , description]);
        // res.json(respuesta)
        // console.log(respuesta)
        res.json({id: respuesta.insertId , title, description})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateJob = async (req, res)=>{
    
    try {
        const respuesta = await pool.query("UPDATE jobs SET ? WHERE id = ? ", [req.body, req.params.id])

        res.json(respuesta)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteJob = async (req, res)=>{
    // console.log(`esta eliminando ${req.params.id}`)
    try {
        const [result] = await pool.query('DELETE FROM jobs WHERE  id = ?', [req.params.id])
        console.log(result)
        console.log(result.affectedRows)
        if (result.affectedRows == 0) {
            return res.status(404).json({message: "No existe trabajo"});
        }
        // return res.status(204).json({message: "Eliminado con exito"});
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}
