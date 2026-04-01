import React from 'react';

const Steps = () => {
    return (
        <div className='bg-gray-100 mx-auto mt-30 mb-10'>
            <div className='w-10/12 mx-auto pt-10 '>
            <h2 className='text-5xl font-extrabold mb-6 text-center'>Get Started in 3 Steps</h2>
            <p className='text-center  text-gray-500'>Start using premium digital tools in minutes, not hours.</p>

           </div>
           <div className='grid md:grid-cols-3 w-10/12 gap-6 mx-auto pb-10'>
            <div className='border-2 border-gray-300 bg-base-100 rounded-lg shadow-sm p-8 mx-auto mt-10'>
              <p className='ml-auto text-white font-extrabold px-4 py-3 rounded-full bg-indigo-600 w-fit' >01</p>
              <div>
                 <img  className='mx-auto bg-purple-200 p-4  rounded-full' src="/src/assets/products/user.png" alt="Step 1" />
              <h2 className='text-3xl font-bold mt-6 mb-3 text-center'>Create Account</h2>
              <p className='text-gray-500 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
              </div>      
         </div>
            <div className='border-2 border-gray-300 rounded-lg bg-base-100  shadow-sm p-8 mx-auto mt-10'>
              <p className='ml-auto text-white font-extrabold px-4 py-3 rounded-full bg-indigo-600 w-fit' >02</p>
              <div>
                 <img  className='mx-auto bg-purple-200 p-4  rounded-full' src="/src/assets/products/package.png" alt="Step 1" />
              <h2 className='text-3xl font-bold mt-6 mb-3 text-center'>Choose Products</h2>
              <p className='text-gray-500 text-center'>Browse our catalog and select the tools that fit your needs.</p>
              </div>
           </div>
            <div className='border-2 border-gray-300 rounded-lg bg-base-100  shadow-sm p-8 mx-auto mt-10'>
              <p className='ml-auto text-white font-extrabold px-4 py-3 rounded-full bg-indigo-600 w-fit' >03</p>
              <div>
                 <img  className='mx-auto bg-purple-200 p-4  rounded-full' src="/src/assets/products/rocket.png" alt="Step 1" />
              <h2 className='text-3xl font-bold mt-6 mb-3 text-center'>Start Creating</h2>
              <p className='text-gray-500 text-center'>Download and start using your premium tools immediately.</p>
              </div>
           </div>
           </div>
        
        </div>

    );
};

export default Steps;