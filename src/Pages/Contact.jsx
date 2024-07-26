import React from "react";
import { useEffect } from "react";
import ContactForm from "../Components/ContactForm";

const Contact=()=>{
    useEffect(() => {
        document.title = "Contact Us - First Track Solution Technologies";
    }, []); 
    return(
        <div>
            <div className=" w-full mx-auto font-inter">

            <div className="absolute w-full h-96 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                <h1 className="text-4xl font-bold">CONTACT US</h1>
            </div>
                <img src="images/contact.jpg" alt="Placeholder" className="w-full h-96 object-cover "/>
            </div>
            <ContactForm/>
        </div>

    )
}

export default Contact;