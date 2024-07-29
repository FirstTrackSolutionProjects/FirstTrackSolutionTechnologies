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
            

            <div className="absolute w-full h-[450px]  bg-black bg-opacity-75 text-white text-center my-auto ">
                <div className=" items-center justify-center md:p-14 p-6 md:mx-20 font-inter">
                <div className="md:text-4xl font-bold py-2">{title}</div>
                <div className="text-xs md:text-base text-justify py-2 px-5">{desc}</div>
                <Link to={link}><div className="flex w-fit items-center ml-5 bg-white text-black focus:border-none text-sm md:text-lg my-5 p-1 md:p-2 transition-transform transform hover:scale-125 rounded-sm">Read More <span><ArrowRightIcon className="text-black mx-2 md:w-6 md:h-7 w-4 h-4 md:text-3xl items-center justify-center mr-2" /></span></div></Link>
                </div>
            </div>
                <img src={imgUrl} alt="Placeholder" className="w-full h-[450px]  object-cover "/>
           
            
        </div>

    )
}

export default Card;