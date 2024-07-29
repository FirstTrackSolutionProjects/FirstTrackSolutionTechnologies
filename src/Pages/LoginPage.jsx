import React from "react";
import Login from "../Components/Login";

const LoginPage=()=>{
    return(
        <div className="bg-bg-login bg-cover mx-auto h-screen p-10">
            <div className="md:flex h-fit">
            <div className="md:w-1/2 items-center justify-center my-auto ">
            <img src="images/gif/gif3.gif" className="md:h-[500px] w-full"></img>
            </div>
            <div className="md:w-1/2 h-fit items-center ">
            <Login/>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;