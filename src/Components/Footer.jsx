import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram , FaLinkedin, FaYoutube  } from 'react-icons/fa';
import { PhoneIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
const Footer =()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return(
        <>
        <div className='items-center justify-center text-center mx-auto font-inter my-5'>
            <div className='my-3 font-semibold text-lg'>Feel Free to Call Us</div>
            <div className='flex justify-center'>
                <div className='w-1 h-1 rounded bg-blue-600 mx-1'></div>
                <div className='w-1 h-1 rounded bg-blue-600 mx-1'></div>
                <div className='w-1 h-1 rounded bg-blue-600 mx-1'></div>
                <div className='w-20 h-1 rounded bg-blue-600 mx-1'></div>
            </div>
            <div className='my-3'>Feel free to call us at any time for further assistance or information.</div>
        </div>

        {/*div 5 */}
        <div className="md:flex items-center justify-between p-10 bg-blue-950 shadow-md w-full md:w-[70%] mx-auto">
            <div className='text-2xl md:text-2xl justify-start text-white font-extrabold'>If you have any queries, please contact us,<br/><span className='hover:text-gray-600'> and we'll be happy to help</span></div>
            <button onClick={() => alert('Button Clicked')}
            className="bg-white text-orange-500 py-5 md:py-3 items-center px-4 rounded-full text-[14px] mx-auto md:w-44 font-bold flex mt-5"><PhoneIcon className="md:h-7 md:w-5 w-4 h-5 mx-1"/>ENQUIRY NOW!</button>
        </div>

        
        <div className="bg-gradient-to-r from-blue-950 to-blue-700 w-full mt-2 h-fit">
            <div className="grid md:grid-cols-4 text-white font-inter ">
                <div className="w-full h-full items-center justify-center p-7 my-auto">
                    <img src="/images/logomain2.JPG" className="w-24 h-24 object-cover rounded-full"></img>
                    <div className="text-justify font-inter text-sm my-5">
                    First Track Solution Technologies Private Limited Is one of the leading Software | Internet company.
                    </div>
                    <div className="bg-blue-400 font-bold w-28 p-3 text-center rounded-full">About Us</div>
                </div>
                <div className="w-full h-full items-center justify-center my-auto p-7">
                <div className="text-xl font-semibold mb-4">Contact Us</div>
                    <div className="flex items-center mb-4 text-balance">
                        <FaMapMarkerAlt className="text-2xl mr-3" />
                        <span className=" text-sm">BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-lg mr-3" />
                        <span className="text-justify text-sm">Phone: +91-9040170727</span>
                    </div>
                    
                    <div className="flex items-center">
                        <FaEnvelope className="text-xl mr-3" />
                        <span className="text-justify text-sm">Email: info@firsttracksolution.tech</span>
                    </div>
                </div>

                <div className="w-full h-full items-center justify-center my-auto p-7">
                    <div className="text-xl font-semibold mb-4">Our Services</div>
                    <div className="my-2 text-sm">Website Designing</div>
                    <div className="my-2 text-sm">Graphics Designing</div>
                    <div className="my-2 text-sm">Digital Marketing</div>
                    <div className="my-2 text-sm">Application Development</div>
                </div>
                <div className="w-full h-full items-center justify-center my-auto p-7">
                    <div className="text-xl font-semibold mb-4">Quick Links</div>
                    <div><Link to='/career' onClick={scrollToTop} className="my-2 text-sm">Career</Link></div>
                    <div><Link to='/services' onClick={scrollToTop} className="my-2 text-sm">Services</Link></div>
                    <div><Link to='/joinus' onClick={scrollToTop} className="my-2 text-sm">Join Us</Link></div>
                    <div><Link to='/joinus' onClick={scrollToTop} className="my-2 text-sm">New Employee On Boarding</Link></div>
                    <div><Link to='/blog' onClick={scrollToTop} className="my-2 text-sm">Blog</Link></div>
                    <div><Link to='/contact' onClick={scrollToTop} className="my-2 text-sm">Contact</Link></div>
                    <div className="text-xl font-semibold mb-4">Follow Us:</div>
                    <div className="flex justify-evenly">
                        
                    <a href="https://www.facebook.com/people/Firsttrack-Solutiontechnologies/pfbid0wn8Bk27pnv2nDpGxJNg1vWLM1ssykjyHBtj4iiJWeaaTwkJz3QMYi7rUoEjutrrl/" target="_blank" rel="noopener noreferrer" >
                    <FaFacebook className="h-6 w-6"/></a>
                    
                    <a href="https://x.com/Firsttrack123" target="_blank" rel="noopener noreferrer" >
                    <FaTwitter className="h-6 w-6"/></a>

                    <a href="https://www.instagram.com/p/C1RPln-Jzds/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" >
                    <FaInstagram className="h-6 w-6"/></a>

                    <a href="https://www.linkedin.com/in/first-track-solution-technologies-9a53482a6/" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin className="h-6 w-6"/></a>

                    <a href="https://www.youtube.com/@FirstTrackSolutionTechnologies?si=dhN3TWFsW1m4QsZm" target="_blank" rel="noopener noreferrer" >
                    <FaYoutube className="h-6 w-6"/></a>

                    
                    
                    
                    
                    </div>
                </div>
            </div>
            <div className="bg-black justify-between text-white text-sm flex-1 md:flex p-8">
                <div><span className="text-gray-400">Copyright &copy; 2024 </span><span className="font-bold"> First Track Solution Technologies. All Rights Reserved.</span></div>
                
                {/*<div className="flex">
                <div><Link to='/' onClick={scrollToTop} className="">Home&nbsp; |</Link></div>
                <div><Link to='/contact' onClick={scrollToTop} className="md:mx-1">Contact Us&nbsp;  |</Link></div>
                <div><Link to='/about' onClick={scrollToTop} className="md:mx-1">About Us&nbsp;  |</Link></div>
                <div><Link to='/privacy' onClick={scrollToTop} className="md:mx-1">Privacy Policy</Link></div>
                </div>*/}

                <div className=" mt-5 md:mt-0 md:flex">
                <Link to='/' onClick={scrollToTop} className="">Home&nbsp; |&nbsp;</Link>
                <Link to='/contact' onClick={scrollToTop} className="md:mx-1">Contact Us&nbsp;  |&nbsp;</Link>
                <Link to='/about' onClick={scrollToTop} className="md:mx-1">About Us&nbsp;  |&nbsp;</Link>
                <Link to='/privacy' onClick={scrollToTop} className="md:mx-1">Privacy Policy</Link>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default Footer;