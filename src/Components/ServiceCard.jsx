import React from "react";

const ServiceCard =({title,desc,imgUrl})=>{
    return(
        <div className="container w-4/5 md:w-[310px] h-fit mx-auto my-auto items-center justify-center rounded shadow-2xl">
            <img src={imgUrl} alt="" className="w-full h-40 object-contain"></img>
            <div className="text-xl text-center text-orange-500 font-inter font-bold p-4">{title}</div>
            <div className="text-gray-600 text-justify p-2">{desc}</div>
            <div className="container text-center rounded mx-auto my-4  border-2 w-28 p-2 bg-white border-orange-600 hover:bg-orange-600 hover:text-white">Read More</div>
        </div>
    )
}

export default ServiceCard;