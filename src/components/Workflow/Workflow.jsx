import React from 'react';

const Workflow = () => {
    return (
        <div className=' pt-25 pb-10 bg-gradient-to-r from-indigo-700 to-purple-600'>
        <div className='w-10/12 text-center mx-auto '>
            <h1 className='text-5xl font-bold text-center text-white'>Ready to Transform Your Workflow?</h1>
            <p className='text-lg mt-6 text-white'>Join thousands of professionals who are already using Digitools to work smarter.</p>
            <p className='text-lg text-white'>Start your free trial today.</p>
            <div className='mt-10 flex justify-center gap-5'>
              <button className='btn btn-primary bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-8 py-3 font-bold'>Explore Products</button>
              <button className='btn border-white bg-transparent text-white rounded-full px-8 py-3 font-bold'>View Pricing</button>
            </div>


            </div>
              
         </div>
    );
};

export default Workflow;