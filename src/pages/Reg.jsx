import React from 'react';
import { Link } from "react-router-dom";

const Reg = () => {
  return (
    <div>  
        <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
          <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-3xl text-center font-bold text-green-500'>Registration</h2>
            <form action="">
                <div className='mb-4'>
                  <label htmlFor="" className="block mb-1 font-semibold text-sm">Name</label>
                  <input type="text" 
                  name="email"
                  placeholder='Enter your name...' 
                  id="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor="" className="block mb-1 font-semibold text-sm">Email</label>
                  <input type="email" 
                  name="password"
                  placeholder='Enter your email...' 
                  id="password" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor="" className="block mb-1 font-semibold text-sm">Passwod</label>
                  <input type="password" 
                  name="password"
                  placeholder='Enter your password...' 
                  id="password" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                <button className='w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700'>Register</button>
              
            </form>
            <p className='mt-4 text-sm text-center'>
              Already have an account{" "}
              <Link to={"/"} className="text-green-600 font-semibold">Login</Link>{" "}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Reg;