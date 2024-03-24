import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="bg-gray-800 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <p className="text-2xl capitalize text-rose-50"></p>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <Link to={"/"} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Inicio</Link> 
                        <Link to={"/new"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Crear Trabajo</Link> 
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="relative ml-3">
                    <div>
                        <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/64764017?v=4" alt="" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

 
  
</nav>

    )
}

export default Navbar;

{/* <div className="bg-gray-800 ">
            <h1>React Mysql</h1>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link> 
                </li>
                <li>
                    <Link to={"/new"}>Create Job</Link> 
                </li>
            </ul>

        </div> */}