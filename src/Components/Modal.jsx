import { useRef, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
const Modal = ({ closeModal }) => {
  const [loadingState, setLoadingState] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fathersName: '',
    mothersName: '',
    guardianName: '',
    guardianRelation: '',
    parentsGuardianMobile: '',
    landmark: '',
    streetAddress: '',
    city: '',
    state:'',
    postalCode: '',
    qualification: '12th',
    dob: '',
    gender: 'Male',
    bloodGroup: 'B+',
    maritalStatus: 'Single',
    aadhaar: '',
    pan: '',
    age: '',
    country: 'India',
    permanentAddressLandmark: '',
    permanentStreetAddress: '',
    permanentAddressCity: '',
    permanentAddressState: '',
    permanentAddresstPostalCode: '',
    permanentAddressCountry: 'India',
    isPermanentAddressSame: true
    });
    const [files , setFiles] = useState({
      tenthDocument:null,
    twelfthDocument:null,
    graduationDocument:null,
    postGraduationDocument:null,
    panDoc:null,
    aadhaarDoc:null,
    passbook:null,
    letter:null,
    salary:null,
    photo:null      
    });

  const getJoinUsRequestDetail = async () => {
    try{
      const response = await fetch(`${BACKEND_URL}/join-us-requests/details`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('joinUsToken')}`
        }
      })
      const data = await response.json();
      if (data.success){
        const basicData = {
          firstName: data.data.first_name,
          lastName: data.data.last_name,
          email: data.data.email,
          phone: data.data.mobile,
        }
        setFormData((prev)=> ({...prev, ...basicData}));
      } else {
        alert(data.message || 'Something went wrong');
        closeModal();
      }
    } catch (error) {
      alert("Something Went Wrong!")
      closeModal();
    }
  }
  useEffect(() => {
    document.title = "Services - First Track Solution Technologies";
    getJoinUsRequestDetail();
  }, []); 

  

  const modalRef = useRef(null);

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Prevent the event from closing the modal
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  

    useEffect(()=>{
      console.log(formData.isPermanentAddressSame)
      if (formData?.isPermanentAddressSame){
        setFormData({...formData,
          permanentAddressLandmark:formData.landmark,
          permanentStreetAddress:formData.streetAddress,
          permanentAddressCity:formData.city,
          permanentAddressState:formData.state,
          permanentAddresstPostalCode:formData.postalCode,
          permanentAddressCountry:formData.country
        })
      } else {
        setFormData({...formData,
          permanentAddressLandmark:'',
          permanentStreetAddress:'',
          permanentAddressCity:'',
          permanentAddressState:'',
          permanentAddresstPostalCode:'',
          permanentAddressCountry:'India'
        })
      }
    },[formData?.isPermanentAddressSame])
  
    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
        return
      }
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleFileChange = (e) => {
      const { name, files } = e.target; 
      setFiles((prev)=>{
          return{
          ...prev,
          [name]: files[0]
        }
      });
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let docsName = ['tenthDocument', 'twelfthDocument', 'graduationDocument', 'postGraduationDocument', 'panDoc', 'aadhaarDoc', 'passbook', 'letter', 'salary', 'photo']
      let docs = {
        tenthDocument : '',
        twelfthDocument : '',
        graduationDocument : '',
        postGraduationDocument : '',
        panDoc : '',
        aadhaarDoc : '',
        passbook : '',
        letter : '',
        salary : '',
        photo : ''
      }
      
      const reqUUID = uuidv4();
      try {
        setLoadingState("Uploading Files...");
        // Create array of upload promises
        const uploadPromises = docsName.map(async (key) => {
          if (!files[key]) return; // Skip if no file

          docs[key] = `joiningForm/${reqUUID}/${uuidv4()}`;
          
          // Get signed URL
          const response = await fetch(`${BACKEND_URL}/hrms-s3/putUrl`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filename: docs[key], filetype: files[key]?.type, isPublic: true})
          });
          
          const { uploadURL } = await response.json();
          
          // Upload file
          return fetch(uploadURL, {
            method: "PUT",
            headers: {
              'Content-Type': files[key]?.type
            },
            body: files[key]
          });
        });

        // Wait for all uploads to complete in parallel
        await Promise.all(uploadPromises);

        setLoadingState("Submitting Form...");
        // Send email notification
        const emailResponse = await fetch(`${BACKEND_URL}/email/join`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('joinUsToken')
          },
          body: JSON.stringify({ formData, docs }),
        });
        
        const result = await emailResponse.json();
        
        if (result.success) {
          alert(result.message || 'Form submitted successfully!');
        } else{
          alert(result.message || 'Error submitting form.');
        }

      } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
      } finally {
        setLoadingState(null);
      }
    };


  return (
    <div className="fixed w-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-72 md:w-96 relative">
      <div className="overflow-y-auto max-h-[70vh] md:max-h-[90vh] scrollbar-hide">
        <button
          onClick={closeModal}
          className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-lg mb-4">Please let us know Your preferred time</h2>
        <form onSubmit={handleSubmit} className=" font-normal space-y-6">
        {/* Name Fields */}
        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="firstName" className="  text-neutral-500 text-sm">
              First Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              disabled
              placeholder='Eg: John'
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className=" text-neutral-500 text-sm">
              Last Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              disabled
              placeholder='Eg: Doe'
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border-gray-700 border bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
        </div>

        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
        <div className="flex-1">
            <label htmlFor="fathersName" className="  text-neutral-500 text-sm">
              Father's Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="fathersName"
              name="fathersName"
              placeholder='Eg: Steve'
              value={formData.fathersName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="mothersName" className=" text-neutral-500 text-sm">
              Mother's Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="mothersName"
              name="mothersName"
              placeholder='Eg: Alex'
              value={formData.mothersName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border-gray-700 border bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
        </div>
        

        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
        <div className="flex-1">
            <label htmlFor="guardianName" className="  text-neutral-500 text-sm">
              Guardian Name
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              placeholder='Eg: Steve'
              value={formData.guardianName}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
            />
          </div>
        </div>

        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
        <div className="flex-1">
            <label htmlFor="guardianRelation" className=" text-neutral-500 text-sm">
              Guardian Relation
            </label>
            <select
              id="guardianRelation"
              name="guardianRelation" 
              onChange={handleChange}
              value={formData.guardianRelation}
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
                <option value="">Select</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Grandfather">Grandfather</option>
                <option value="Grandmother">Grandmother</option>
                <option value="Uncle">Uncle</option>
                <option value="Aunt">Aunt</option>
                <option value="Cousin">Cousin</option>
                <option value="Nephew">Nephew</option>
                <option value="Niece">Niece</option>
                <option value="Father-in-law">Father-in-law</option>
                <option value="Mother-in-law">Mother-in-law</option>
                <option value="Brother-in-law">Brother-in-law</option>
                <option value="Sister-in-law">Sister-in-law</option>
                <option value="Son-in-law">Son-in-law</option>
                <option value="Daughter-in-law">Daughter-in-law</option>
                <option value="Spouse">Spouse</option>
                <option value="Husband">Husband</option>
                <option value="Wife">Wife</option>
                <option value="Stepfather">Stepfather</option>
                <option value="Stepmother">Stepmother</option>
                <option value="Stepbrother">Stepbrother</option>
                <option value="Stepsister">Stepsister</option>
                <option value="Guardian">Guardian</option>
                <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="parentsGuardianMobile" className="  text-neutral-500 text-sm">
              Parents/Guardian Phone <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="parentsGuardianMobile"
              name="parentsGuardianMobile"
              placeholder='Eg: 9876543210'
              value={formData.parentsGuardianMobile}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
              required
            />
          </div>
        </div>

        {/* Email and Phone Fields */}
        
          <div className="flex-1">
            <label htmlFor="email" className=" text-neutral-500 text-sm">
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled
              placeholder='Eg: john@doe.com'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="phone" className=" text-neutral-500 text-sm">
              Phone <span className='text-red-500'>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              disabled
              placeholder='Eg: 9542775289'
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className=" text-neutral-500 text-sm">
              Date of Birth <span className='text-red-500'>*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder='Eg: 9542775289'
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          </div>

          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="maritalStatus" className=" text-neutral-500 text-sm">
              Marital Status <span className='text-red-500'>*</span>
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus" 
              onChange={handleChange}
              required
              value={formData.maritalStatus}
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
              
                <option value="Single">Single</option>
                <option value="Married">Married</option>
             
            </select>
            
            
          </div>

          <div className="flex-1">
            <label htmlFor="bloodGroup" className=" text-neutral-500 text-sm">
              Blood Group <span className='text-red-500'>*</span>
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup" 
              required
              onChange={handleChange}
              value={formData.bloodGroup}
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
              
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O+</option>

             
            </select>
            
            
          </div>
          </div>

          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="age" className="  text-neutral-500 text-sm">
              Age <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder='Eg: 25'
              value={formData.age}
              onChange={handleChange}
              className="mt-1 focus:outline-none w-full text-sm border border-gray-600 shadow-md bg-neutral-100 h-8 p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="gender" className=" text-neutral-500 text-sm">
              Gender <span className='text-red-500'>*</span>
            </label>
            <select
              id="gender"
              name="gender" 
              onChange={handleChange}
              value={formData.gender}
              required
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
              
                <option value="Male">Male</option>
                <option value="Female">Female</option>
             
            </select>
            
            
          </div>
        </div>
          <div className="flex-1">
            <label htmlFor="aadhaar" className=" text-neutral-500 text-sm">
              Aadhaar <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="aadhaar"
              name="aadhaar"
              placeholder='123412341234'
              value={formData.aadhaar}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="pan" className=" text-neutral-500 text-sm">
              Pan <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="pan"
              name="pan"
              placeholder='ABCDE1234F'
              value={formData.pan}
              onChange={handleChange}
              className="mt-1 focus:outline-none border text-sm w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          {/* Address Fields */}
          <p>Current Address: </p>
          <div className="flex-1">
            <label htmlFor="landmark" className=" text-neutral-500 text-sm">
              Landmark <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              placeholder='Eg: Near ABC building'
              value={formData.landmark}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="streetAddress" className=" text-neutral-500 text-sm">
              Street Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder='Eg: 24 Wallaby Way'
              value={formData.streetAddress}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="city" className=" text-neutral-500 text-sm">
              City <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder='Eg: Sydney'
              value={formData.city}
              onChange={handleChange}
              className="mt-1  text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className=" text-neutral-500 text-sm">
              State <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder='Eg: New South Wales'
              value={formData.state}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          </div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="country" className=" text-neutral-500 text-sm">
              Country <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              disabled
              placeholder='Eg: 2000'
              value={formData.country}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="postalCode" className=" text-neutral-500 text-sm">
              Postal Code <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder='Eg: 2000'
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          </div>

          <div className="flex-1 flex ">
            <label htmlFor="isPermanentAddressSame" className=" text-neutral-500 text-sm">
              Current Address same as Permanent Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="checkbox"
              id="isPermanentAddressSame"
              name="isPermanentAddressSame"
              checked={formData.isPermanentAddressSame}
              onChange={handleChange}
              className=""
              required
            />
          </div>

          {!formData.isPermanentAddressSame ?
            <>
          <p>Permanent Address:</p>
          <div className="flex-1">
            <label htmlFor="permanentAddressLandmark" className=" text-neutral-500 text-sm">
              Landmark <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentAddressLandmark"
              name="permanentAddressLandmark"
              placeholder='Eg: Near ABC building'
              value={formData.permanentAddressLandmark}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="permanentStreetAddress" className=" text-neutral-500 text-sm">
              Street Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentStreetAddress"
              name="permanentStreetAddress"
              placeholder='Eg: 24 Wallaby Way'
              value={formData.permanentStreetAddress}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1"
              required
            />
          </div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="permanentAddressCity" className=" text-neutral-500 text-sm">
              City <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentAddressCity"
              name="permanentAddressCity"
              placeholder='Eg: Sydney'
              value={formData.permanentAddressCity}
              onChange={handleChange}
              className="mt-1  text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="permanentAddressState" className=" text-neutral-500 text-sm">
              State <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentAddressState"
              name="permanentAddressState"
              placeholder='Eg: New South Wales'
              value={formData.permanentAddressState}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          </div>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4 space-x-0 mt-3">
          <div className="flex-1">
            <label htmlFor="permanentAddressCountry" className=" text-neutral-500 text-sm">
              Country <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentAddressCountry"
              name="permanentAddressCountry"
              disabled
              placeholder='Eg: Australia'
              value={formData.permanentAddressCountry}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="permanentAddresstPostalCode" className=" text-neutral-500 text-sm">
              Postal Code <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="permanentAddresstPostalCode"
              name="permanentAddresstPostalCode"
              placeholder='Eg: 123456'
              value={formData.permanentAddresstPostalCode}
              onChange={handleChange}
              className="mt-1 text-sm focus:outline-none border w-full border-gray-700 bg-neutral-100 h-8 shadow-md p-1 "
              required
            />
          </div>
          </div>
          </> : null
          }

          <div className="flex-1">
            <label htmlFor="qualification" className=" text-neutral-500 text-sm">
              Qualification <span className='text-red-500'>*</span>
            </label>
            <select
              id="qualification"
              name="qualification" 
              onChange={handleChange}
              value={formData.qualification}
              className="mt-1 text-sm focus:outline-none block w-full p-1 border text-neutral-500 border-gray-700 bg-neutral-100 h-8 ">
              
                <option value="12th">12th</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
             
            </select>
            
            
          </div>
          
        
        

        
        

        {/*Docs upload*/}
       <div className='px-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="tenthDocument">
            10th Document <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="tenthDocument"
            name='tenthDocument'
            accept='.pdf'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="twelfthDocument">
            12th Document <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="twelfthDocument"
            name='twelfthDocument'
            accept='.pdf'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="graduationDocument">
            Graduation Document
          </label>
          <input
            type="file"
            id="graduationDocument"
            name='graduationDocument'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="postGraduationDocument">
            Post Graduation Document
          </label>
          <input
            type="file"
            id="postGraduationDocument"
            name='postGraduationDocument'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="panDoc">
            PAN Card <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="panDoc"
            required
            name='panDoc'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="aadhaarDoc">
            Aadhaar Card <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="aadhaarDoc"
            name='aadhaarDoc'
            accept='.pdf'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="passbook">
            Bank Passbook <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="passbook"
            required
            name='passbook'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="letter">
           If any experience-Offer Letter/Relieving letter/Experience Certificate
          </label>
          <input
            type="file"
            id="letter"
            name='letter'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="salary">
            Latest Salary Slip-3 Months
          </label>
          <input
            type="file"
            id="salary"
            name='salary'
            accept='.pdf'
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="photo">
            Photo <span className='text-red-500'>*</span>
          </label>
          <input
            type="file"
            id="photo"
            name='photo'
            accept='.jpg,.jpeg,.png'
            required
            onChange={handleFileChange}
            className="w-full p-2 file:text-xs text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loadingState !== null}
            className="inline-flexjustify-center py-2 px-4 border border-transparent text-sm text-white bg-sky-500 disabled:bg-sky-300 disabled:cursor-not-allowed"
          >
            {loadingState || 'Submit'}
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Modal;
