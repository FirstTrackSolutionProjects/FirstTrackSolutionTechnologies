// import React,{useEffect, useState} from "react";
// import '../index.css';
// import AuthBox from "../Components/AuthBox";

// const Openings=()=>{
//     useEffect(() => {
//         document.title = "Current Openings - First Track Solution Technologies";
//     }, []); 

//     const [formData, setFormData] = useState({
//         keyword: '',
//         jobType: '',
//         location: ''
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement job search functionality here
//         console.log('Search Jobs:', formData);
//       };
//     return(
//         <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(images/office.jpg)' }}>
//       <div className="absolute inset-0 bg-white opacity-30"></div>
//       <div className="relative z-10 flex items-center justify-end h-full">
//       <AuthBox/>
//       </div>
      
//     </div>
//     )
// }


// export default Openings;



// import React from "react";

// const Openings = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <a
//         href="https://fts.firsttracksolutiontechnologies.com/current-openings"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
       
//       </a>
//     </div>
//   );
// };

// export default Openings;
