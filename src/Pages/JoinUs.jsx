import React from "react";
import { useEffect } from "react";

const JoinUs=()=>{
  useEffect(() => {
    document.title = "Join Us - First Track Solution Technologies";
}, []); 
    return(
 
        <div className="w-full mx-auto p-8">
        <div>This content is password protected. To view it please enter your password below:</div>
        <label htmlFor="password" className="block text-sm  mt-3">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-md focus:outline-none  sm:text-sm"
        />
        <div>
          <button
            type="submit"
            className="inline-flex justify-center m-3 py-2 px-4 border border-transparent text-sm rounded-md text-white font-bold bg-sky-400"
          >
            ENTER
          </button>
        </div>
      </div>

    )
}

export default JoinUs;