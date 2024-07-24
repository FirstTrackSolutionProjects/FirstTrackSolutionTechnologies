import React from "react";
import Signup from "../Components/Signup";

const SignupPage =()=>{
    return(
        <div className="bg-bg-signup bg-cover mx-auto h-screen p-10">
            <div className="md:flex h-fit">
            <div className="md:w-1/2 h-fit items-center ">
            <Signup/>
            </div>
            <div className="md:w-1/2 items-center justify-center my-auto ">
            <img src="images/gif/gif8.gif" className="md:h-[400px]"></img>
            </div>
            </div>
        </div>
    )
}

export default SignupPage;