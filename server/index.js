import  express  from "express"
import cors from "cors"
// console.log("hola iniciando")
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js"
import jobRoutes from "./routes/jobs.routes.js"
import morgan from "morgan";

import {fileURLToPath} from "url";
import {dirname, join} from "path"

const app= express();


//Setting
const _dirname = dirname(fileURLToPath(import.meta.url));
// console.log(_dirname)
//Middlewares - son funciones que se ejecutan antes de que llege a las rutas
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

//Routes
app.use(indexRoutes)
app.use("/api/", jobRoutes)
// Static files
app.use(express.static(join(_dirname, "../client/dist")))
//Starting the server
app.listen(PORT)
console.log(`servidor inicializado en el puerto ${PORT}`)