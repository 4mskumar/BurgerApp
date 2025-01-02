import React, { useEffect, useState } from 'react';
import FollowCursor from './FollowCursor.jsx';
import '/src/index.css';

const Hero = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className='w-full h-screen bg-cover flex' style={{ backgroundImage: `url('/src/assets/images/bg.jpg')` }}>
        <img className='w-[60rem] h-[60rem] pt-[3rem] pl-[3rem] bg-cover' src="/src/assets/images/burger.png " alt="" />
        <div className='flex items-center flex-col justify-center w-[43rem] relative'>
          <h1 className='text-white font-lintin text-8xl'>Our New<span className='text-yellow-200'> Hopper</span> </h1>
          <p className='mt-5 text-white w-[30rem] text-center text-md font-medium'>At Burgrill, we’re always innovating to bring you the best grilling experience, and we're excited to introduce our latest addition<sapn className='text-yellow-200'> the New Hopper</sapn></p>
          <div className='mt-14 flex flex-col items-center'>
            <button className='text-slate rounded-lg font-oswald bg-yellow-500 font-medium hover:bg-yellow-200 text-xl hover:scale-105 transition duration-300 px-8 py-4'>Order Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
