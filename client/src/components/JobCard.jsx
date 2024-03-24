// import { deleteJobRequest } from "../api/jobs.api";
import {useJobs} from "../context/JobsContext"
import { useNavigate } from "react-router-dom";

// se esta separado para poder hacer mantener y mejor legible
function JobCard({ job, index }) {
  // console.log(job.id)
  //movido al context 
    // const handleDelete = async (id) => {
    //       try {
    //         const response = await deleteJobRequest(id);
    //         console.log(response)

    //       } catch (error) {
    //         console.error(error)      
    //       }    
    //     };
  const {deleteJob, toggleJobDone} = useJobs();
  const navigate = useNavigate();

  //esta idea ya no 
  const handleDone = (id) => {
    toggleJobDone(id)
  }

  return (
          <tr>
            <th  scope="row">{index}</th>
            <td >{job.title}</td>
            <td > {job.description}</td>
            <td >{job.done === 1 ? "✔" : "❌"}</td>
            <td >{job.createdAt}</td>
            <td className="flex space-x-1 ml-6">
                <button onClick={()=> navigate(`/edit/${job.id}`)} className="rounded bg-blue-400 px-2 py-1 text-white">Editar</button>
                    {/* <button onClick={()=> handleDelete(job.id)}>Eliminar</button>  */}

                <button onClick={()=> deleteJob(job.id)}  className="rounded bg-red-400 px-2 py-1 text-white">Eliminar</button>
                <button onClick={()=> handleDone(job.id)} className="rounded bg-green-400 px-2 py-1 text-white">Hecho</button>
            </td>
          </tr>
  );
}

export default JobCard;
{/*
*/} 