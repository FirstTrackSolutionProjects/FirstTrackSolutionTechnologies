import React from "react";

const Infotech=()=>{
    return(
        <div>
            <div className="md:w-2/3 h-44 md:h-60 mx-auto mt-10">
        <img 
          src="images/serv3.jpg" 
          alt="Full Width Image" 
          className="w-full h-full object-cover mx-auto"
        />
      </div>

        <div className="md:right-0">
        <div className="z-0 absolute left-10 md:left-auto md:right-80 top-32 md:top-64 md:w-1/2 h-32 md:h-48 flex items-center justify-center bg-black bg-opacity-80 text-white text-center">
            <h1 className="text-xl md:text-4xl font-bold text-center">Information Technology</h1>
        </div>
        </div>

        <div className=" mx-auto md:mt-32 p-6 md:p-14 font-inter">
        <div className="text-justify" >First Track Solution Technologies offers a comprehensive suite of IT services designed to support your business operations, enhance efficiency, and ensure security. Our IT services encompass a wide range of solutions tailored to meet the specific needs of businesses across various industries. </div>
        <div className="text-orange-600 font-semibold mt-3">Some Key Features-</div>
        <div className="md:flex">
        <div className="md:w-1/2 my-3 text-justify pr-5">
        <div className="mt-2 mb-4"><span className="font-bold">Web Designing</span><br/><span className="text-gray-500">Our web designing services focus on creating visually appealing, user-friendly, and highly functional websites that effectively represent your brand and engage your audience.</span></div>
        <div className="my-4"><span className="font-bold">Graphic Designing</span><br/><span className="text-gray-500">Our team creates stunning graphics for your digital platforms, including social media graphics, banner ads, and email templates. We ensure that your digital presence is visually engaging and cohesive.</span></div>
        <div className="my-4"><span className="font-bold">Application Development</span><br/><span className="text-gray-500">We develop high-quality mobile applications for iOS and Android platforms. Our mobile app development services include native app development, cross-platform app development, and app maintenance and support.</span></div>
        </div>
        <div className="md:w-1/2 items-center justify-center my-auto p-4">
            <img src="images/gif/gif4.gif" alt="" className="w-full mx-auto items-center justify-center"></img>
        </div>
        </div>
        <div className="my-3 text-justify"><span  className="text-orange-600 font-semibold">Our Trusted Clients</span>
        <br/><span className="text-lg">Jupiter Xpress</span>
        <br/><span className="text-lg">7DXpress</span></div>
        
        </div>

        </div>
    )
}

export default Infotech;