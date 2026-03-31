import React from 'react';

const User = () => {
    return (
        <div className='mb-10 pt-15 pb-10 bg-gradient-to-r from-indigo-700 to-purple-600'>
            <div className=' w-8/12 md:flex justify-between mx-auto  '>
                  <div className=' text-white'>
                 <h1 className='text-5xl font-bold text-center'>50K+</h1>
                <p className=' pb-5 text-center mt-4 text-lg'>Active Users</p>
               </div>
                <hr className='py-5 border-white md:border-l-2  md:h-30'></hr>
               <div className=' text-white'>
                 <h1 className='text-5xl font-bold text-center'>200+</h1>
                <p className=' pb-5 text-center mt-4 text-lg'>Premium Tools</p>
               </div>
                <hr className=' py-5 border-white md:border-l-2  md:h-30'></hr>
               <div className=' text-white'>
                 <h1 className='text-5xl font-bold text-center'>4.9</h1>
                <p className='text-center mt-4 text-lg'>Rating</p>
               </div>
            </div>
        </div>

    
    );
};

export default User;