import React from 'react';
import BannerPng from '../../assets/products/banner.png';

const Banner = () => {
    return (
        <div>
            <div>
                <button></button>
                    <h1 className='text-5xl font-bold text-center mt-10'>Welcome to DigiTools</h1>
                    <p className='text-center mt-4 text-lg'>Discover the power of digital tools with DigiTools. Our platform offers a wide range of innovative solutions to enhance your productivity and creativity. Whether you're a student, professional, or hobbyist, DigiTools has something for everyone. Explore our collection of cutting-edge software, applications, and resources designed to help you achieve your goals. Join us today and unlock your full potential with DigiTools!</p>
                    <div className='flex justify-center mt-6'>
                        <button className='btn btn-primary'>Get Started</button>
                        <button className='btn btn-soft ml-4'>Learn More</button>
                    </div>
            </div>
            <div>
                <img src={BannerPng} alt="Banner" className='w-full mt-10' />

            </div>
        </div>
    );
};

export default Banner;