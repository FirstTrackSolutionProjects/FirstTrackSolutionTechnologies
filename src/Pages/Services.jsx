import React from "react";
import { useEffect } from "react";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/outline";
import { BiCheckSquare, BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import SliderService from "../Components/SliderService";




const Services=()=>{
    useEffect(() => {
        document.title = "Services - First Track Solution Technologies";
    }, []); 
    return(
        <div className="">
            <div className=" items-center justify-between md:p-10 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-50 shadow-md w-full mx-auto">
                <div className="text-white text-3xl md:text-5xl font-bold p-10">OUR SERVICES</div>
            </div>
            <div>
                <div className="md:flex h-fit">
                    <div className="md:w-1/2 p-6 items-center justify-center my-auto">
                        <img src="images/banner-5.webp"></img>
                    </div>
                    <div className="md:w-1/2 font-inter p-6">
                        <div className="md:mt-6 text-orange-600 font-bold md:text-lg">Best Leading Software Company<br/> <span>Software | E-commerce | Internet</span></div>
                        <div></div>
                        <div className="my-5 text-xl md:text-2xl font-semibold">Welcome to First Track Solution Technologies - Your Gateway to Digital Excellence</div>
                        <div className="text-gray-600 my-3 text-sm md:text-base">At First Track Solution Technologies, we are dedicated to delivering top-notch solutions across various domains. Our expertise spans multiple sectors, including IT, Finance, Training & Development, Recruitment, Web Designing, Graphic Designing, Application Development, and Digital Marketing. We pride ourselves on being a one-stop destination for all your technology and business needs.</div>
                        <div className="text-gray-600 mt-6 text-sm md:text-base">More than just addressing your marketing requirements, our passionate and innovative professionals are committed to an elevated mission — propelling your brand to unprecedented heights. In addition to our prowess in digital marketing, we specialize in crafting sophisticated software solutions and creating bespoke websites. Our comprehensive approach extends to graphic design, encompassing UI and UX design, video editing, and photo editing. 
                            This holistic suite of services ensures that your online presence not only meets industry standards but exceeds them, offering your customers an unparalleled and visually engaging experience. This multifaceted expertise solidifies your brand as a leader in the digital space, making a lasting impression on your audience.</div>
                    </div>
                </div>
                <SliderService/>

                <div className="my-2 mx-auto h-full font-inter">
                    <div className="text-2xl text-center p-5 font-bold">Our Services</div>
                    <div className="md:grid md:grid-cols-4 h-full px-4 md:px-12 space-y-2 md:space-y-0">
                        <div className="bg-white shadow-xl h-full mx-auto justify-center pb-2">
                            <img src="images/service1.webp" className="p-5"></img>
                            <div className="text-xl text-center text-orange-500 font-bold">WEBSITE DESIGNING</div>
                            <div className="justify-center mx-6 font-inter my-3">
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>1 Domain Name(.in.com)</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>1 Year of Hosting</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>10 GB of storage space</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Unlimited Bandwidth</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>2 Professional email-id for 1 year</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>SSL Certificate</div>
                            </div>
                            <div className="my-5 mx-auto bg-white rounded-md border-2 border-orange-500 w-32 text-center p-1 font-semibold">Get In Touch</div>
                        </div>
                        <div className="bg-white shadow-xl h-full mx-auto justify-center pb-2">
                            <img src="images/service2.webp" className="p-5"></img>
                            <div className="text-xl text-center text-orange-500 font-bold">DIGITAL MARKETING</div>
                            <div className="justify-center mx-6 font-inter my-3">
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>1 Month Work Tie-Up</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Premium Digital Marketing</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Premium Facebook Add Support</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Premium Image & Video Marketing</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>No. of Image Post-30</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Facebook Paid Add (Rs.1500)</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Google Paid Add Rs. 1500</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>SEO: 15+Keyword</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>SEO Work Include: Content Submission</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>And Many More Services</div>
                            </div>
                            <div className="my-5 mx-auto bg-white rounded-md border-2 border-orange-500 w-32 text-center p-1 font-semibold">Get In Touch</div>
                        </div>
                        <div className="bg-white shadow-xl h-full mx-auto justify-center pb-2">
                            <img src="images/service3.webp" className="p-5"></img>
                            <div className="text-xl text-center text-orange-500 font-bold">GRAPHIC DESIGNING</div>
                            <div className="justify-center mx-6 font-inter my-3">
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Logo Design</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Poster Design</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Short Video</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Visiting Card</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>ID Card Design</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Letter Pad</div>
                            </div>
                            <div className="my-5 mx-auto bg-white rounded-md border-2 border-orange-500 w-32 text-center p-1 font-semibold">Get In Touch</div>
                        </div>
                        <div className="bg-white shadow-xl h-full mx-auto justify-center pb-2">
                            <img src="images/service6.webp" className="p-5"></img>
                            <div className="text-xl text-center text-orange-500 font-bold mx-1">APPLICATION DEVELOPMENT</div>
                            <div className="justify-center mx-6 font-inter my-3">
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>1 Domain Name(.in.com)</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>1 Year of Hosting</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>10 GB of storage space</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>Unlimited Bandwidth</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>2 Professional email-id for 1 year</div>
                                <div className="flex items-center my-1 text-gray-600"><span className="mx-2"><CheckIcon className="w-3 h-3 bg-green-600 text-white rounded-sm"/></span>SSL Certificate</div>
                            </div>
                            <div className="my-5 mx-auto bg-white rounded-md border-2 border-orange-500 w-32 text-center p-1 font-semibold">Get In Touch</div>
                        </div>

                    </div>

                </div>

                
            



                {/*div 2*/}
                <div className="text-center mt-8 ">
                    <div className="text-blue-500 md:text-xl font-inter font-bold">Our Brand</div>
                    <div className="text-2xl md:text-[50px] font-bold">Clients | Parent Company</div>
                </div>
                <div className="md:flex space-x-2 p-4 md:p-10">
                    <div className="md:w-[30%] h-40 md:h-48 bg-white container shadow-gray-700 shadow-lg md:shadow-2xl rounded-lg items-center"><img src="images/fuddins.webp" className="py-3 items-center justify-center object-cover"></img></div>
                    <div className="md:w-[70%] md:px-5 py-3">
                        <div className="text-gray-600">Fuddins Mart is the daily essentials grocery mart whereas customer can buy their daily products physical from Fuddins Mart Store or may buy online through our Fuddins App. Products — Grocery, Fresh Vegetables,Fruits, Diary, Baby care products, and many more</div>
                        <a href="https://fuddins.com/" target="_blank" rel="noopener noreferrer" ><div className="flex font-bold container bg-green-500 w-40 p-2 text-center mt-6 items-center justify-center rounded-sm bg-opacity-90 transition-transform transform hover:scale-125"><ArrowRightIcon className="w-4 h-6 text-3xl text-white mr-2" />
                        <span className="text-white">Explore Now</span></div></a>
                    </div>
                </div>
                <div className="md:flex space-x-2 px-4 md:px-10">
                    <div className="md:w-[30%] h-40 md:h-48 bg-white container shadow-gray-700 shadow-lg md:shadow-2xl rounded-lg items-center"><img src="images/fuddins2.jpg" className=" items-center justify-center h-32 object-cover my-6 mx-auto"></img></div>
                    <div className="md:w-[70%] md:px-5 py-3">
                        <div className="text-gray-600">FUDDINS is the online home delivery services app, with the categories of food, groceries, vegetables, fruits, diary, beverages, snacks, deserts, house hold item, beauty & cosmetics, baby care products, tobacco, garments, pharma, footwear, electronics & electrical products, sports item, pc & laptop & many more.</div>
                        <a href="https://fuddins.com/" target="_blank" rel="noopener noreferrer" ><div className="flex font-bold container bg-green-500 w-40 p-2 text-center mt-6 items-center justify-center rounded-sm bg-opacity-90 transition-transform transform hover:scale-125"><ArrowRightIcon className="w-4 h-6 text-3xl text-white mr-2" />
                        <span className="text-white">Explore Now</span></div></a>
                    </div>
                </div>
            </div>

            <div className="p-4 md:mx-32">
            <div className="md:mt-20 md:p-10 py-5 rounded-2xl h-fit container shadow-md items-center justify-between  bg-gradient-to-b from-blue-950 via-indigo-900 to-slate-300 w-full">
                <div className="md:flex">
                    <div className="md:w-[45%] md:my-auto font-inter ">
                        <div className="text-white text-2xl md:text-4xl font-extrabold px-5 md:px-10">Let us together build a flourishing business</div>
                        <div className="text-white text-sm md:text-base px-5 md:px-10 py-5 text-justify font-semibold">When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!</div>
                    </div>
                    <div className="md:-mt-16  md:w-[55%] md:p-8"><img src="images/banner-6.webp" className=""></img></div>
                </div>
                
            </div>
            </div>




        </div>

    )
}

export default Services;