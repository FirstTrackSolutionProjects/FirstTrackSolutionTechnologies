import React from "react";
import { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";




const Services=()=>{
    useEffect(() => {
        document.title = "Services - First Track Solution Technologies";
    }, []); 
    return(
        <div>
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
                        <div className="text-gray-600 my-3 text-sm md:text-base">At First Track Solution Technologies, we transcend the conventional role of a mere digital marketing agency; we emerge as your dedicated partners on the dynamic journey toward online success. 
                            Recognizing the paramount importance of navigating the ever-evolving digital landscape, we take pride in presenting a team of seasoned experts poised to guide you through the intricacies of this fast-paced realm.</div>
                        <div className="text-gray-600 mt-6 text-sm md:text-base">More than just addressing your marketing requirements, our passionate and innovative professionals are committed to an elevated mission — propelling your brand to unprecedented heights. In addition to our prowess in digital marketing, we specialize in crafting sophisticated software solutions and creating bespoke websites. Our comprehensive approach extends to graphic design, encompassing UI and UX design, video editing, and photo editing. 
                            This holistic suite of services ensures that your online presence not only meets industry standards but exceeds them, offering your customers an unparalleled and visually engaging experience. This multifaceted expertise solidifies your brand as a leader in the digital space, making a lasting impression on your audience.</div>
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
                        <div className="text-gray-600">Fuddins is the daily essentials grocery mart whereas customer can buy their daily products physical from Fuddins Mart Store or may buy online through our Fuddins App. Products — Grocery, Fresh Vegetables,Fruits, Diary, Baby care products, and many more</div>
                        <a href="https://fuddins.com/" target="_blank" rel="noopener noreferrer" ><div className="flex font-bold container bg-green-500 w-40 p-2 text-center mt-6 items-center justify-center rounded-sm bg-opacity-90 transition-transform transform hover:scale-125"><ArrowRightIcon className="w-4 h-6 text-3xl text-white mr-2" />
                        <span className="text-white">Explore Now</span></div></a>
                    </div>
                </div>
                <div className="md:flex space-x-2 px-4 md:px-10">
                    <div className="md:w-[30%] h-40 md:h-48 bg-white container shadow-gray-700 shadow-lg md:shadow-2xl rounded-lg items-center"><img src="images/fuddins2.jpg" className=" items-center justify-center h-36 object-cover my-6 mx-auto"></img></div>
                    <div className="md:w-[70%] md:px-5 py-3">
                        <div className="text-gray-600">FUDDINS Mart is the online home delivery services app, with the categories of food, groceries, vegetables, fruits, diary, beverages, snacks, deserts, house hold item, beauty & cosmetics, baby care products, tobacco, garments, pharma, footwear, electronics & electrical products, sports item, pc & laptop & many more.</div>
                        <a href="https://fuddins.com/" target="_blank" rel="noopener noreferrer" ><div className="flex font-bold container bg-green-500 w-40 p-2 text-center mt-6 items-center justify-center rounded-sm bg-opacity-90 transition-transform transform hover:scale-125"><ArrowRightIcon className="w-4 h-6 text-3xl text-white mr-2" />
                        <span className="text-white">Explore Now</span></div></a>
                    </div>
                </div>
            </div>

            <div className="p-4 md:mx-32">
            <div className="md:mt-28 md:p-10 py-5 rounded-2xl h-fit container shadow-md items-center justify-between  bg-gradient-to-b from-blue-950 via-indigo-900 to-slate-300 w-full">
                <div className="md:flex">
                    <div className="md:w-[45%] md:my-auto font-inter ">
                        <div className="text-white text-2xl md:text-4xl font-extrabold px-5 md:px-10">Let us together build a flourishing business</div>
                        <div className="text-white text-sm md:text-base px-5 md:px-10 py-5 text-justify font-semibold">When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!</div>
                    </div>
                    <div className="md:-mt-52 md:w-[55%] md:p-8"><img src="images/banner-6.webp" className=""></img></div>
                </div>
                
            </div>
            </div>




        </div>

    )
}

export default Services;