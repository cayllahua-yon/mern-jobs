import {Routes , Route} from "react-router-dom"
import JobsComponent from "./pages/JobsComponentPage"
import JobsForm from "./pages/JobsForm"
import NotFoundPage from "./pages/NotFoundPage"
import Navbar from "./components/Navbar"
import {JobContextProvider} from "./context/JobsContext"

function App() {
 
// Crear un componente
  return (
    <div className="h-screen bg-slate-400">
        <Navbar/>
      <div className="container mx-auto ">
        <JobContextProvider>
      
        <Routes>
          <Route path="/" element={<JobsComponent />}> </Route>
          <Route path="/new" element={<JobsForm />}> </Route>
          <Route path="/edit/:id" element={<JobsForm />}> </Route>
          <Route path="*" element={<NotFoundPage />}> </Route>

        </Routes>
      </JobContextProvider>
      </div>
    </div>

  )
}

export default App
