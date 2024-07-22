import React from "react";
import { useEffect } from "react";
import CareerForm from "../Components/CareerForm";

const Career=()=>{
    useEffect(() => {
        document.title = "Career - First Track Solution Technologies";
    }, []); 
    return(
        <div>
            <div className=" w-full mx-auto z-0">

            <div className="absolute w-full h-96 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                <h1 className="text-4xl font-bold">CAREER</h1>
            </div>
                <img src="images/career.jpg" alt="Placeholder" className="w-full h-96 object-cover "/>
            </div>
            <CareerForm/>
        </div>

    )
}

export default Career;