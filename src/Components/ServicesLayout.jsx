import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesLayout=()=>{
    
    return(
        <>
          <div className="text-center font-bold text-3xl">OUR <span className="text-orange-500">SERVICES</span></div>
          <div className="w-20 h-1 bg-orange-500 text-center justify-center items-center mx-auto my-4"></div>
              
              <div className="h-fit flex flex-col">
                {/* Row 1: Centered Card */}
                <div className="flex justify-center items-center my-1">
                  <ServiceCard imgUrl={'images/service1.webp'} title='WEB DESIGNING' desc={'Make a lasting impression with a user-friendly and visually appealing website. Our design and development team creates responsive and high-performance websites tailored to your brand.'}/>
                </div>
          
                {/* Row 2: Three Equal Cards */}
                <div className="grid md:grid-cols-3 mx-auto my-1">
                <ServiceCard className="mx-auto" imgUrl={'images/service2.webp'} title='DIGITAL MARKETING' desc={'Make a lasting impression with a user-friendly and visually appealing website. Our design and development team creates responsive and high-performance websites tailored to your brand.'}/>
                <div><img src="images/service5.webp" className="w-80 h-fit object-cover my-20"></img></div>
                <ServiceCard imgUrl={'images/service3.webp'} title='GRAPHIC DESIGNING' desc={'Make a lasting impression with a user-friendly and visually appealing website. Our design and development team creates responsive and high-performance websites tailored to your brand.'}/>
                </div>
          
                {/* Row 3: Centered Card */}
                <div className="flex justify-center items-center my-1">
                <ServiceCard imgUrl={'images/service4.webp'} title='APPLICATION DEVELOPMENT' desc={'Make a lasting impression with a user-friendly and visually appealing website. Our design and development team creates responsive and high-performance websites tailored to your brand.'}/>
                </div>
              </div>
              </>
    )
}

export default ServicesLayout;