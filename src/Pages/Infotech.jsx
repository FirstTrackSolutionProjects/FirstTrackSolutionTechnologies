import React, {useEffect}from "react";
import ImageMarquee from "../Components/ImageMarquee";


const Infotech=()=>{
    const imageUrls = [
        'images/partners/jupiter.jpg',
        'images/partners/7d.jpg',
        'images/partners/fuddin.jpg',
        'images/partners/fuddin2.jpg',
      ];
    useEffect(() => {
        document.title = "Information Technology - First Track Solution Technologies";
    }, []); 
    return(
        <div>
            <div className=" w-full md:w-2/3 mx-auto z-0 font-inter my-2">
                <div className="absolute w-full md:w-2/3 h-60 md:h-96 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                    <h1 className="text-4xl font-bold">Information & Technology</h1>
                </div>
                    <img src="images/serv1.jpg" alt="Placeholder" className="w-full h-60 md:h-96 object-cover "/>
            </div>

        <div className=" mx-auto  p-6  font-inter">
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
        
        <div className="bg-neutral-100 p-2 h-fit">
        <div className="mt-8 text-2xl text-center text-orange-600 font-semibold">Our Clients</div>
        
        <div className="my-3">
            <ImageMarquee/>
        
        </div>
        </div>
        </div>
        </div>
    )
}

export default Infotech;