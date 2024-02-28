import  express  from "express"
// console.log("hola iniciando")
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js"
import jobRoutes from "./routes/jobs.routes.js"
import morgan from "morgan";

const app= express();

//Setting

//Middlewares - son funciones que se ejecutan antes de que llege a las rutas
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use(indexRoutes)
app.use(jobRoutes)
// Static files

//Starting the server
app.listen(PORT)
console.log(`servidor inicializado en el puerto ${PORT}`)