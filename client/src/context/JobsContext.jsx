import { createContext, useContext, useState} from "react"
import {getJobsRequest, deleteJobRequest, createJobRequest, getJobRequest, updateJobRequest, toggleJobDoneRequest} from "../api/jobs.api"


export const JobContext = createContext(); // lo separamos jobConext / jobProvider

//creamos un HOOK proprio para manejar los trabajos
export const useJobs = () => {
   const context = useContext(JobContext) ;

    if(!context){
        throw new Error("useJobs deberia estar dentro del JobContextProvider ")
    }
   return context
}

// Sera el padre jobContextProvider <></>
export const JobContextProvider = ({ children }) => {    
    const [jobs, setJobs] = useState();
    
    //funcion obtener lista de trabajos
    async function getJobs() {
        const response = await getJobsRequest()
        console.log(response.data)
        setJobs(response.data)  // podemos acceder ala variable jobs
        
    }

    const deleteJob = async (id) => {
              try {
                const response = await deleteJobRequest(id);
                console.log(response)
                setJobs( jobs.filter( job => job.id !== id))
              } catch (error) {
                console.error(error)      
              }    
            };

    const createJob = async (dataJob) => {
        try {
            const response =  await createJobRequest(dataJob)
            console.log(response)
            // setJobs(response) // esto se implementa si esque no se pidiera en getJobs que trae nuestra lista total de trabajos
            // setJobs([...jobs, response.data]) // añadimos al array existente lo el que creamos
        } catch (error) {
            console.log(error)
        }
    }

    const getJob = async (id) => {
        try {
            const response = await getJobRequest(id);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    const updateJob = async (id, newFields) => {
        try {
            const response = await updateJobRequest(id, newFields)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const toggleJobDone = async (id) => {
        try {
            const jobFound = jobs.find((job) => job.id === id)
            const toggleDone = jobFound.done === 0 ? true : false; 
            await toggleJobDoneRequest(id, toggleDone)

            jobs.map(job => job.id === id ? job.done = job.done === 0 ? 1: 0 : job.done)
            setJobs([...jobs])
            
        } catch (error) {
            console.error(error)
        }
    }


    return <JobContext.Provider value={{jobs, getJobs, deleteJob, createJob, getJob, updateJob, toggleJobDone}}>
        {children}
    </JobContext.Provider>
}