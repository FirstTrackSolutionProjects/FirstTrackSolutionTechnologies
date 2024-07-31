import React , {useState, useRef} from 'react';
import { useEffect } from "react";
import { ReactTyped } from 'react-typed';
import CounterCard from '../Components/CounterCard';
import ServicesLayout from '../Components/ServicesLayout';
import ProgressBar from '../Components/ProgressBar';
import AnalysisForm from '../Components/AnalysisForm';
import TrustedPartners from '../Components/TrustedPartners';

const HomePage = () => {
    useEffect(() => {
        document.title = "Home - First Track Solution Technologies";
    }, []); 

    


  return (
    <div className="">

        {/* div 1*/} 
        {/* 
        <div className='md:flex items-center justify-center md:my-5'>
            
            <img src='images/banner-1.webp' alt='' className='md:w-2/4 max-h-fit mx-auto object-cover'></img>
            <div className='text-3xl md:text-6xl font-bold text-center py-5 md:my-0'>Want to Start Your</div>
            <div className='text-4xl md:text-6xl font-bold text-center pb-5 md:py-5 md:my-0'> <ReactTyped className='text-rose-500' strings={["Business"]} typeSpeed={150}  loop /> </div>
        </div> */}

        <div className='md:grid md:grid-cols-2'>
            <div className="mx-auto"><img src="images/banner-1.webp" alt="" className='max-h-fit mx-auto p-4'></img></div>
            <div className='items-center justify-center my-5 md:my-auto mx-auto '>
            <div className='text-3xl md:text-6xl font-bold text-center'>Want to Start Your</div>
            <div className='text-4xl md:text-6xl font-bold text-center'> <ReactTyped className='text-rose-500' strings={["Business"]} typeSpeed={150}  loop /> </div>
            </div>
        </div>

        {/* div 2*/} 
        
        <div className='md:flex items-center justify-center bg-neutral-200 p-5 md:p-16 text-center'>
            <div className="text-[16px] md:text-2xl font-bold font-inter md:px-8">First Track Solution Technologies<br/>Private Limited</div>
            <div className="text-[14px] md:text-3xl font-bold font-inter p-5 md:px-8">A Leading Software Company<br/><ReactTyped className='text-violet-600 mt-10' strings={["Software | Internet Company"]} typeSpeed={120} loop  /></div>
        </div>

        {/* div 3*/} 

        <div className='md:flex font-inter text-justify'>
        <div className="w-full md:w-[55%] p-3 md:p-9">
            <div className='my-5'>
            <div className='text-md md:text-lg font-bold my-2'>ABOUT US</div>
            <div className='text-sm md:text-lg text-gray-700 '>First Track Solution Technologies Private Limited is one of the leading Software | Internet Company established on Oct 2022</div>
            <div className='text-sm md:text-lg text-gray-700 mt-2'>Choose us for unparalleled digital marketing expertise, driving your success with innovative strategies, proven results, and a commitment to your brand’s growth.</div>
            </div>

            <div className='my-5'>
            <div className='text-md md:text-lg font-bold my-2'>MISSION</div>
            <div className='text-sm md:text-lg text-gray-700'>Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.</div>
            </div>

            <div className='my-5'>
            <div className='text-md md:text-lg font-bold my-2'>VISION</div>
            <div className='text-sm md:text-lg text-gray-700'>Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.</div>
            </div>
        </div>
        <div className="w-full md:w-[45%] p-5 my-auto">
        <div className="grid md:grid-cols-2 gap-4 min-h-fit">
            <div className="container shadow-md rounded-md md:p-4  h-40 md:h-48 items-center justify-center">
                <div className='text-center items-center justify-center'>
                    <img src='images/circle_orange.webp' className='h-20 md:h-fit items-center justify-center mx-auto'></img>
                    <div className='my-5  font-bold text-gray-700'>Design</div>
                </div>
            </div>
            <div className="md:p-4 h-40 md:h-48 container shadow-md rounded-md items-center justify-center">
            <div className='text-center items-center justify-center'>
                    <img src='images/circle_blue.webp' className='h-20 md:h-fit items-center justify-center mx-auto'></img>
                    <div className='my-5  font-bold text-gray-700'>Development</div>
                </div>
            </div>
            <div className="md:p-4 h-44 md:h-52 container shadow-md rounded-md items-center justify-center">
            <div className='text-center items-center'>
                    <img src='images/circle_green.webp' className='h-20 md:h-fit items-center justify-center mx-auto'></img>
                    <div className='mt-6  font-bold text-gray-700'>Product UX, Design & Development</div>
                </div>
            </div>
            <div className="md:p-4 h-44 md:h-52 container shadow-md rounded-md items-center justify-center">
            <div className='text-center items-center justify-center'>
                    <img src='images/circle_purple.webp' className='h-20 md:h-fit items-center justify-center mx-auto'></img>
                    <div className='my-6 font-bold text-gray-700'>Marketing Stategy and Creative Campaigns</div>
                </div>
            </div>
        </div>

        </div>
        </div>
        
        
        {/* div 4*/} 

        <div>
            <div className='bg-neutral-200 text-3xl font-bold text-center font-inter p-5'>
                Hire <span className='text-orange-500'>Us For :</span>
            </div>
            
            <div className=' bg-neutral-200 grid md:grid-cols-3 text-center font-inter '>
                <div className='px-7 py-5'>
                    <div className='text-orange-500 text-2xl font-semibold my-3'>Design</div>
                    <div className=' text-gray-700 text-justify my-3'>Our web design team has ample years of experience in the core areas of design to build a website that you need.</div>
                </div>
                <div className='px-7 py-5'>
                <div className='text-orange-500 text-2xl font-semibold my-3'>Development</div>
                <div className='text-gray-700 text-justify my-3'>Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.</div>
                </div>
                <div className='px-7 py-5'>
                <div className='text-orange-500 text-2xl font-semibold my-3'>Marketing</div>
                <div className='text-gray-700 text-justify my-3'>With researched digital marketing, we will ensure that new customers and clients are able to find your business.</div>
                </div>

            </div> 
        </div>

        {/* div 5*/} 
        <div className='mt-16 md:mr-20 h-fit'>
        <div className='md:flex items-center justify-center '>
            <div className='md:w-[50%] items-center justify-center mx-auto'><img src='images/banner-3.JPG' className='md:h-[500px] h-[300px] w-fit mx-auto'></img></div>
            <div className='md:w-[50%] items-center justify-center p-8  font-inter'>
                <div className='my-5 text-center'>Experience</div>
                <div className='my-5 text-center font-semibold'>WHY CHOOSE US</div>
                <div className='text-justify my-5'>We are the <span className='text-orange-600'>right term for your business.</span> We have the expertise and knowledge to offer impartial advice and services at an honest price.
                    With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.</div>
                    <div className="md:m-5">
                    <ProgressBar percentage={95} title='Result Driven Approach'/>
                    <ProgressBar percentage={97} title='Experienced Team'/>
                    <ProgressBar percentage={98} title='Client Satisfaction'/>
                    <ProgressBar percentage={99} title='Transparent Communication'/>
                </div>
            </div>
        </div>
        </div>

        {/*div 6*/}
        <div className='md:flex md:p-8'> 
            <div className='w-full md:w-[55%] p-12'> 
            <div className="text-lg text-center">Some <span className="relative inline-block">
            <span className="relative z-10 text-orange-500">Amazing</span>
            <span className="absolute inset-x-0 bottom-0 border-b-2 border-orange-500 z-0"></span>
            </span> Facts
            </div>
            
            <div className='grid md:grid-cols-2  gap-3'>
            <div className='p-3 md:h-36 items-center container shadow-md w-full rounded-lg'>
                <CounterCard targetCount={95} symbol="%"/>
                <div className='font-inter text-sm text-center my-4 text-gray-600 '>Strategic Expertise, Measurable Results</div>
            </div>
            <div className='p-3 md:h-36 items-center container shadow-md w-full rounded-lg'>
                <CounterCard targetCount={99} symbol="%" />
                <div className='font-inter text-sm text-center my-4 text-gray-600 '>Innovative Solutions, Timely Execution</div>
            </div>

            <div className='p-3 md:h-32 items-center container shadow-md w-full rounded-lg'>
                <CounterCard targetCount={30} symbol="+" />
                <div className='font-inter text-sm text-center my-4 text-gray-600 '>Skilled Employee</div>
            </div>

            <div className='p-3 md:h-32 items-center container shadow-md w-full rounded-lg'>
                <CounterCard targetCount={60} symbol="+" />
                <div className='font-inter text-sm text-center my-4 text-gray-600 '>Satisfied Client</div>
            </div>
        </div>
            </div>

            <div className='w-full md:w-[45%] p-8'>
                <img src='images/banner-2.webp' className='w-fit h-full my-auto'></img>
            </div>
        </div>

        {/* div 6*/}
        <ServicesLayout />

        {/* div 7*/}
        <div className='md:flex h-fit mt-14 md:mx-20'>
            <div className='md:w-[50%] mx-auto md:p-20 justify-end'>
                <img src='images/banner-4.webp' alt='' className=' w-72 md:w-full object-cover h-fit'></img>
            </div>
            <div className='md:w-[50%]'>
                <div className='text-center text-2xl font-bold'>GET <span className='text-orange-500'>FREE</span> WEBSITE ANALYSIS!</div>
                <AnalysisForm/>
            </div>
        </div>

        <div className='w-full mx-auto font-inter py-2 md:py-5 bg-gradient-to-r from-black via-gray-500 to-slate-300'>
            <div className='text-center text-xl md:text-4xl mt-3 mb-6 font-bold text-white'>Our Trusted Partners</div>
            <TrustedPartners/>
        </div>
    
    </div>
  );
};

export default HomePage;
