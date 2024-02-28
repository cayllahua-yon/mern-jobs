import {Router} from "express"
import {pool} from "../conexionBD.js"

const router = Router();

router.get('/ping', async (req, res)=>{ 
    const resutlado = await pool.query("select 1 + 1 as result")
    console.log(resutlado[0][0].result)
    res.json('ping')
});

export default router;