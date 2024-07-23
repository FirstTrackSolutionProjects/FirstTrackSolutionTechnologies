import React from "react";
import { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';

const Card=({title,desc,imgUrl,link})=>{
    useEffect(() => {
        document.title = "Services-Information Technology";
    }, []); 
    return(
        <div>
            

            <div className="absolute w-full h-[400px] bg-black bg-opacity-75 text-white text-center my-auto ">
                <div className=" items-center justify-center p-14 mx-20 font-inter">
                <div className="text-4xl font-bold py-2">{title}</div>
                <div className="text-justify py-2">{desc}</div>
                <Link to={link}><div className="flex w-fit bg-white text-black text-lg my-5 p-2 transition-transform transform hover:scale-125">Read More <span><ArrowRightIcon className="text-black mx-2 w-6 h-7 text-3xl items-center justify-center mr-2" /></span></div></Link>
                </div>
            </div>
                <img src={imgUrl} alt="Placeholder" className="w-full h-[400px] object-cover "/>
           
            
        </div>

    )
}

export default Card;