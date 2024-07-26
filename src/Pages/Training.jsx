import React,{useState, useEffect} from "react";

const Training=()=>{
  useEffect(() => {
    document.title = "Training & Development - First Track Solution Technologies";
}, []); 
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // Start the animation when the component mounts
      setAnimate(true);
    }, []);
  
    return (
    <div className=" mx-auto">
      {/*<div className={`w-2/3 h-60 mx-auto mt-10 transition-transform duration-1000 ${animate ? 'translate-y-10' : '-translate-y-full'}`}>*/}
      <div className="md:w-2/3 md:h-60 h-44 mx-auto mt-10">
        <img 
          src="images/serv3.jpg" 
          alt="Full Width Image" 
          className="w-full h-full object-cover mx-auto"
        />
      </div>

        <div className="md:right-0">
        <div className="absolute left-10 md:left-auto md:right-80 top-32 md:top-64 md:w-1/2 h-32 md:h-48 flex items-center justify-center bg-black bg-opacity-80 text-white text-center">
            <h1 className="text-xl md:text-4xl font-bold text-center">Training & Development</h1>
        </div>
        </div>

        <div className="bg-neutral-100 mx-auto md:mt-32 p-6 md:p-14 font-inter">
        <div className="text-justify" >First Track Solution on behalf of NSE Academy Ltd. Is offering on-demand complimentary Financial Awareness Programs for various working professionals, associated members, volunteers and students, etc. </div>
        <div className="text-orange-600 font-semibold mt-3">About NSE Academy Limited -</div>
        <div className="md:flex">
        <div className="md:w-1/2 my-3 text-justify md:pr-5">NSE Academy Limited is a wholly owned subsidiary of the National Stock Exchange of India Limited (NSE). NSE Academy Limited enables the next generation of BFSI and FinTech professionals with industry-aligned skills – through capacity building programs and certification courses, powered by an online examination and certification system. The courses are well-researched and carefully crafted with inputs from the industry professional. NSE Academy Limited works closely with reputed universities and institutions across India in building a competent workforce for the future of BFSI and FinTech. NSE Academy Limited also promotes financial literacy as an essential life skill among youngsters – a contribution towards financial inclusion and wellbeing.
        </div>
        <div className="md:w-1/2 items-center justify-center my-auto p-4">
            <img src="images/nse.jpeg" alt="" className="w-full mx-auto items-center justify-center border-2 border-orange-700"></img>
        </div>
        </div>
        <div className="my-3 text-justify"><span  className="text-orange-600 font-semibold">For more information visit: nseindia.com</span>
        <br/>NSE Academy in partnership with our AMC (Asset Management Company) partner, have jointly launched a complimentary certification program termed as “An introduction to the world of investments”. This program is designed to spread financial awareness and is funded by our industry patron. We can immediately roll-out this program for you. On successful completion each participant will be awarded with a NSE Academy certificate.
        </div>
        
        </div>



        </div>

    );
  };
export default Training;