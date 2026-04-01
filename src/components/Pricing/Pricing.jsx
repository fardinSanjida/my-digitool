import React from 'react';
import VectorPng from '../../assets/products/Vector.png';

const Pricing = () => {
    return (
           <div className='w-10/12 mx-auto mt-30 mb-10'>
            <div className='w-10/12 mx-auto pt-10 '>
            <h2 className='text-5xl font-extrabold mb-6 text-center'>Simple, Transparent Pricing</h2>
            <p className='text-center  text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

           </div>
           <div className='grid md:grid-cols-3 gap-5 mx-auto pb-10'>
            <div className='border-2 border-gray-300 bg-base-100 rounded-lg shadow-sm p-5 mt-10'>
              <h2 className=' text-3xl font-extrabold ' > Starter</h2>
                <p className='text-gray-500 mt-2 mb-4'>Perfect for getting started</p>
                <div className='mt-7 mb-7'>
                 <h2 className='inline text-3xl font-bold mt-8 mb-3 text-center'>$0</h2>
                    <p className='text-gray-500 inline text-center'>/month</p>
                </div>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Access to 10 free tools </p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Basic templates</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Community support</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Community support</p>
                <button className='mt-17 btn rounded-full   w-full bg-gradient-to-r from-indigo-700 to-purple-600 text-white' >Get Started For Free</button>
              </div> 

               <div className='border-2 border-gray-300 bg-gradient-to-r from-indigo-700 to-purple-600 text-white rounded-lg shadow-sm p-5 mt-10'>
                 <div class="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full w-fit px-3 py-1 font-bold text-indigo-700 mx-auto relative bottom-9">Most Popular</div>
              <h2 className=' text-3xl font-extrabold ' > Pro</h2>
                <p className='text-white mt-2 mb-4'>Best for professionals</p>
                <div className='mt-7 mb-7'>
                 <h2 className='inline text-3xl font-bold mt-8 mb-3 text-center'>$29</h2>
                    <p className='text-white inline text-center'>/month</p>
                </div>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Access to all premium tools </p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Unlimited templates</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Priority support</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Unlimited projects</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Cloud sync</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Advanced analytics</p>
                <button className='mt-3  btn rounded-full text-indigo-700  w-full ' >Start Pro Trial</button>
              </div> 


               <div className='border-2 border-gray-300 bg-base-100 rounded-lg shadow-sm p-5  mt-10'>
              <h2 className=' text-3xl font-extrabold ' > Enterprise</h2>
                <p className='text-gray-500 mt-2 mb-4'>For teams and businesses</p>
                <div className='mt-7 mb-7'>
                 <h2 className='inline text-3xl font-bold text-center'>$99</h2>
                    <p className='text-gray-500 inline text-center'>/month</p>
                </div>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Everything in Pro </p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Team collaboration</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Custom integrations</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Dedicated support</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />SLA guarantee</p>
                <p className='px-3 rounded-full text-lg font-semibold'><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />Custom branding</p>
                <button className='mt-3  btn rounded-full   w-full bg-gradient-to-r from-indigo-700 to-purple-600 text-white' >Contact Sales</button>
              </div>      
         </div>
         
           
           </div>
        
      

    );
};

export default Pricing;