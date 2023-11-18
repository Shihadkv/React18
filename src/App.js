import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header"
import Body  from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";

import { createBrowserRouter,
    RouterProvider,
    Outlet
 } from "react-router-dom";

/**
 * 
 * 
 */ 

const AppLayout = () =>{
    return (
        <div className="AppLayout">
            <Header/>
            <Outlet/>
           
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        children:[
            {
                path: "/",
                element:<Body />,
               
            },
            {
                path: "/about",
                element:<About />,
               
            }
        ],
        errorElement: <Error/>,
    },
   
]
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider  router = {appRouter}/>)