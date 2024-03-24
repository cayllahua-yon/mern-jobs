// import { useEffect, useState } from "react";
import { useEffect } from "react";
// import {getJobsRequest} from "../api/jobs.api"
import JobCard from "../components/JobCard";
import {useJobs } from "../context/JobsContext"

function JobsComponent(){
    // const [jobs, setJobs] = useState();
    const {jobs, getJobs} = useJobs()  // traendo varible y funcion
     
    useEffect(()=>{
        // async function getJobs() {
        //     const response = await getJobsRequest()
        //     console.log(response.data)
        //     setJobs(response.data)  // podemos acceder ala variable jobs
        // }
        getJobs(); 
    }, [])
    
    // pintamos cada elemento
    function renderMain() {
        if (jobs?.length === 0) return <h2> No existe puesto de trabajo</h2>;

        return jobs?.map( (job, index) => (
            <JobCard job={job} key={job.id} index={ index + 1} />
        ))
    }

    return(
        <div className=" h-screen flex flex-col items-center justify-start">
            <h1 className="text-2xl text-gray-300">Listar Todos los Trabajos</h1>
            <table className="table-auto border-spacing-4 border border-slate-500 bg-sky-100">
            <thead className="bg-slate-600">
                <tr >
                    <th >#</th>
                    <th >Titulo</th>
                    <th >Descripción</th>
                    <th >Done</th>
                    <th >Fecha</th>
                    <th >Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    renderMain()
                }
            </tbody>           
                
            </table>
            
        </div>
    )
}

export default JobsComponent;