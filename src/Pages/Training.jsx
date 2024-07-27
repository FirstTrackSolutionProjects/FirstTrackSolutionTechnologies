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
      <div className=" w-full md:w-2/3 mx-auto z-0 font-inter my-2">
                <div className="absolute w-full md:w-2/3 h-60 md:h-96 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                    <h1 className="text-4xl font-bold">Training & Development</h1>
                </div>
                    <img src="images/serv3.jpg" alt="Placeholder" className="w-full h-60 md:h-96 object-cover "/>
            </div>

        <div className="bg-neutral-100 mx-auto p-6  font-inter">
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