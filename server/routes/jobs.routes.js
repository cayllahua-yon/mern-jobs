import {Router} from "express"
import {getJobs, createJob, updateJob, getJob, deleteJob} from "../controllers/jobs.controllers.js"

const router = Router()

router.get('/jobs', getJobs)
router.post('/job', createJob)
router.put('/job/:id', updateJob)
router.get('/job/:id', getJob)
router.delete('/job/:id', deleteJob)

export default router