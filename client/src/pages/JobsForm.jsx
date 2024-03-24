import {Form,  Formik} from "formik"
import {useJobs} from "../context/JobsContext"
import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import {createJobRequest} from '../api/jobs.api'
// import {JobContext} from "../context/JobsContext"
// import {useContext} from "react"
// import {useJobs} from "../context/JobsContext"

function JobsForm() {
    // const {text , x} = useContext(JobContext);
    // const {text , x} = useJobs();
    // console.log(text, x )
    const {createJob, getJob, updateJob} = useJobs();
    const [job, setJob] = useState({title:"",description:""});
    const params = useParams();
    const navigate= useNavigate();
    // console.log(params)
    useEffect( ()=>{
        const loadJob = async () => {
            if (params.id) {
                // console.log('cargando dato');
                const response = await getJob(params.id);
                // console.log(response)
                setJob({
                    title: response.title,
                    description: response.description
                });
            }
        }
        loadJob();
    }, [])


    return(
        <div className=" h-screen p-4 flex flex-col items-center justify-start ">
            <h1 className="text-2xl text-gray-700">{params.id ? "Editar Trabajo": "Crear nuevo Trabajo"}</h1>
            <div className="bg-slate-100 h-60 w-80 flex justify-center rounded-lg">

            {/* <Formik initialValues={{title:"",description:""}}  */}
            <Formik initialValues={job} 
            enableReinitialize={true}
                    onSubmit={ async (values, actions)=>{
                        // console.log(values); 
                        if (params.id) {
                            // console.log("Update")
                            await updateJob(params.id, values)
                            navigate("/")
                        }else{
                            await createJob(values)
                            navigate("/")

                        }
                        
                        actions.resetForm();// tema de direccionar al guardar
                        // setJob({
                        //     title: "",
                        //     description: ""
                        // })
                    }}
            >

                { // creamos una funcion para devolver un elemento de jsx / extraemos propiedades
                    ({handleChange, handleSubmit, values,  isSubmitting})=>(

                        <Form onSubmit={handleSubmit } className="flex flex-col w-full p-4"> 
                            <label>Titulo</label>
                            <input onChange={handleChange} value={values.title} type="text" name="title" placeholder="Escribe un titulo al trabajo"/>

                            <label>Descripción</label>
                            <textarea onChange={handleChange} value={values.description} name="description" rows={3} placeholder="Escribe una descripción"></textarea>

                            <button type="submit" disabled={isSubmitting} className="rounded bg-blue-400 px-2 py-1 text-white mt-4">
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>
                        </Form>
                    )
                }
            </Formik>
            </div>
        </div>
    )
}

export default JobsForm;