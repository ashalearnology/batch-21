import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaLock } from "react-icons/fa";

//  This is a working code
// this is new code

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-900 px-2">
      <div className="relative bg-white h-full w-full max-w-lg rounded-xl overflow-hidden ">
        <div className="flex justify-center p-4 bg-green-700">
          <h1 className="text-white font-bold text-3xl">Login Form</h1>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 pt-6  ">
          <div className="relative">
            <IoIosContact
              size={35}
              className="absolute bg-green-700  text-white rounded-l-sm"
            />
            <input
              placeholder="EMail or phone "
              className="  border-2 p-1 rounded border-gray-200 text-red-500 pl-14 w-sm"
            />
          </div>
          <div className="relative">
            <FaLock
              size={35}
              className="absolute bg-green-700 p-1 text-white rounded-l-sm"
            />
            <input
              placeholder="password"
              className="border-2 p-1 rounded border-gray-200 text-red-500  pl-14 tracking-wide w-sm"
            />
          </div>
        </div>
        <div className="px-8 md:px-16 py-3">
          <p>Forgot password?</p>
        </div>
        <div className="px-4 w-full   flex justify-center mx-auto ">
          <button className="bg-green-700 py-2 lg:py-3 w-full max-w-sm rounded-[0.5rem] text-amber-50 font-bold tracking-[0.15rem] text-xl mx-auto ">
            Login
          </button>
        </div>
        <div className="p-3 text-center">
          <p>
            Not a member? <span className="text-green-700">Sigup now </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
