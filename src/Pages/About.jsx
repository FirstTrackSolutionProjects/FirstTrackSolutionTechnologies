import { useEffect } from "react";
import React from "react";
import '../index.css'
import AboutSlider from "../Components/AboutSlider";


const About=()=>{
    useEffect(() => {
        document.title = "About Us - First Track Solution Technologies";
    }, []); 
    return(
        <div>
            <div className=" w-full mx-auto">

            <div className="z-0 absolute w-full h-96 flex items-center justify-center bg-black bg-opacity-60 text-white text-center p-4">
                <h1 className="text-4xl font-bold">ABOUT US</h1>
            </div>
                <img src="images/about.jpg" alt="Placeholder" className="w-full h-96 object-cover "/>
            </div>

            
           
          
            
           <div className="md:my-2 font-inter md:p-8 bg-gradient-to-l from-slate-50 to-white md:flex items-center">
           <img src="images/gif/gif2.gif" className=" bg-white w-fit md:w-80 h-64 md:mx-20 items-center mx-auto p-2 md:p-0"></img>
            <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">Who We Are</div>
            <div className="text-justify my-1 p-3">About First Track Solution is one of the leading Training & Development organisations since Oct 2011.</div>
            <div className="text-justify my-1 p-3">From Oct 2022, it became registered as an First Track Solution Technologies Private Limited, it's an Software Development | Fintech |  E-commerce  | Training & Development | Job Recruitment | Internet company.<br/>We specialize in delivering innovative and high-quality software development, tailored e-commerce platforms, and comprehensive internet services to meet the diverse needs for all. Our dedicated team of professionals is committed to excellence, ensuring that we stay ahead of industry trends and technology advancements.</div>
           </div>
           </div>
           
           <div className=" p-5">
                <div className="text-center font-inter text-3xl">Meet Our Team</div>
                <div className='flex justify-center mt-2'>
                <div className='w-1 h-1 rounded bg-orange-500 mx-1'></div>
                <div className='w-1 h-1 rounded bg-orange-500 mx-1'></div>
                <div className='w-1 h-1 rounded bg-orange-500 mx-1'></div>
                <div className='w-32 h-1 rounded bg-orange-500 mx-1'></div>
                
            </div>
            <AboutSlider/>
            </div>
            
       
            

























            {/*<div> 

            <div className="my-5 text-center font-inter mx-auto bg-neutral-300 p-5 md:px-10 md:py-14">
                <div className="grid md:grid-cols-3">
                <div className="p-6">
                    <div className="text-2xl font-bold mb-5">MR.PRABHANJAN KU. PATTNAIK</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER</div>
                    <div className="text-balance">Prabhanjan serves as a transformational coach and trainer, aiding both individuals and corporations in achieving substantial changes in key areas such as organizational dynamics, humanistic approaches, communication, creativity, public speaking, and leadership.</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl mt-8">
                    <div className="text-2xl font-bold mb-5">MR.DEBASISH MAHAPATRO</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER | CTO</div>
                    <div className="text-balance">Debasish, a tech-savvy professional, stays on the pulse of emerging software trends. He spearheads technology initiatives, fostering an atmosphere of innovation and ultimately ensuring the utmost quality in software development.</div>
                </div>
                <div className="p-5">
                    <div className="text-2xl font-bold mb-5 mt-16">MR.PARMESH PANDA</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER</div>
                    <div className="text-balance">Parmesh exudes charisma and professionalism as a highly adept businessperson. He consistently showcases exceptional skills and unwavering dedication when addressing challenges.</div>
                </div>
                </div>
                <div className="mb-5 text-center font-inter ">
                    <div className="text-2xl font-bold mb-5 mt-16">MR.DAMBARUDHAR MEHER</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER</div>
                    <div className="text-balance">Specializing primarily in tailored sessions with team members, middle and senior management, she meticulously designs her sessions based on the client’s specific needs.</div>
                </div>
                </div>*/}
                
            
        </div>

    )
}

export default About;