import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black py-10'>
          <div className='  text-white md:flex md:justify-between w-10/12 mx-auto'>
            <div className='w-[40%] '>
                <h1 className='text-3xl font-bold text-start '>Digitools </h1>
                <p className='text-left text-gray-400 mt-4'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools</p>
            </div>
            <div className='text-white grid ml-6 md:grid-cols-4 gap-15'>
                <div>
                <h2 className='text-xl font-bold mb-4'>Products</h2>
                <ul className='space-y-2'>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Feature </a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Pricing</a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Templates</a></li>
                     <li><a href="#" className='text-gray-400 hover:text-white'>Integrations</a></li>
                </ul>
              </div>
               <div>
                  <h2 className='text-xl font-bold mb-4'>Company</h2>
                <ul className='space-y-2'>
                    <li><a href="#" className='text-gray-400 hover:text-white'>About Us</a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Careers</a></li>
                    
                    <li><a href="#" className='text-gray-400 hover:text-white'>Blog</a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Press</a></li>
                </ul>
             </div>
             <div>
                 <h2 className='text-xl font-bold mb-4'>Resources</h2>
                <ul className='space-y-2'>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Documentation</a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Help Center</a></li>
                    <li><a href="#" className='text-gray-400 hover:text-white'>Community</a></li>
                     <li><a href="#" className='text-gray-400 hover:text-white'>Contact</a></li>
                </ul>
              </div>
              <div>
                 <h2 className='text-xl font-bold mb-4'>Social Links</h2>
                 <div className='flex' ><CiInstagram className='ml-2' />
                      <FaFacebook className='ml-2' />
                      <FaXTwitter className='ml-2' />

                 </div>


            </div>
            </div>
        </div>
         <hr className='border-gray-600 mt-4 mb-4 ' />
        <div className='flex justify-between w-10/12 mx-auto ' >
           <div>
            <p className=' inline text-start text-gray-500
             mt-4'>© 2026 Digitools. All rights reserved.</p>
          </div>
           <div>
            <p className='inline text-gray-500 mt-4 mr-4'>Privacy Policy</p>
            <p className='inline text-gray-500 mt-4 mr-4
            '>Terms of Service</p>
            <p className='inline text-gray-500  mt-4'>Cookie Policy</p>
                
           </div>


        </div>
                
        </div>
    );
};

export default Footer;