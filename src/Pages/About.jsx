import { useEffect } from "react";
import React from "react";


const About=()=>{
    useEffect(() => {
        document.title = "About Us - First Track Solution Technologies";
    }, []); 
    return(
        <div>
            
            <div className="my-5 text-center font-inter">
                <img src="images/about1.webp" className="mx-auto w-60 h-60 rounded-tr-xl rounded-bl-xl object-cover"></img>
                <div className="text-2xl md:text-3xl font-bold mt-8">Mr. Tejash Prakash</div>
                <div className="text-xl md:text-2xl font-semibold text-red-500 mt-8">Founder | CEO</div>
                <div className="text-lg md:text-xl text-balance my-8 text-neutral-500">As the founder of First Track Solution Technologies Private Limited, he is a seasoned business professional who inspires the brightest minds to explore emerging technologies.</div>
            </div>
            <div className="my-5 text-center font-inter">
                <img src="images/about2.webp" className="mx-auto w-60 h-60 rounded-tr-xl rounded-bl-xl object-cover"></img>
                <div className="text-2xl md:text-3xl font-bold mt-8">Ms. Toral Barbhaya</div>
                <div className="text-xl md:text-2xl font-semibold text-red-500 mt-8">Director</div>
                <div className="text-lg md:text-xl text-balance my-8 text-neutral-500">As the director of the company, she spearheads business initiatives, infusing an innovative spirit, and ultimately ensures the delivery of the highest quality software solutions for clients.</div>
            </div>
            {/*
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