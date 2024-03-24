import axios from "axios"

export const getJobsRequest = async () => await axios.get("http://localhost:4000/api/jobs");


// va recibir un objeto de job
export const createJobRequest = async (job) => {
    return await axios.post("http://localhost:4000/api/job", job)
}

export const deleteJobRequest = async (id) => await axios.delete(`http://localhost:4000/api/job/${id}`);

export const getJobRequest = async (id) => await axios.get(`http://localhost:4000/api/job/${id}`);

export const updateJobRequest = async (id, newFields) => await axios.put(`http://localhost:4000/api/job/${id}`, newFields);

export const toggleJobDoneRequest = async (id, done) => await axios.put(`http://localhost:4000/api/job/${id}`, {done}) 