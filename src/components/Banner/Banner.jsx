import React from 'react';
import BannerPng from '../../assets/products/banner.png';
import Group5Png from '../../assets/products/Group 5.png';
import PlayPng from '../../assets/products/Play.png';

const Banner = () => {
    return (
        <div className=' w-10/12 md:flex justify-between mx-auto my-21 '>
            <div className='w-[50%] my-auto'>
                <button className='text-purple-600 bg-purple-200 px-4 py-2 rounded-full flex w-[300px] '> <img src={Group5Png} alt="New: AI-Powered Tools Available" className='w-6 h-6 mr-2' /> New: AI-Powered Tools Available</button>
                    <h1 className='text-center text-6xl md:text-7xl font-bold md:text-left mt-8'>Supercharge Your <br></br>Digital Workflow</h1>
                    <p className='text-center md:text-left mt-4 text-lg'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
Explore Products</p>
                    <div className='flex mt-6 '>
                        <button className='btn text-white bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-900 px-6 py-4 rounded-full'>Explore Products</button>
                        <button className='btn text-purple-500 border-purple-500 hover:bg-gradient-to-r from-purple-600 to-indigo-600 hover:text-white ml-4 rounded-full'> <img src={PlayPng} alt="Watch Demo" className='w-6 h-6 mr-2' /> Watch Demo</button>
                    </div>
            </div>
            <div>
                <img className='w-full mt-10' src={BannerPng } alt="Banner" />

            </div>
        </div>
    );
};

export default Banner;