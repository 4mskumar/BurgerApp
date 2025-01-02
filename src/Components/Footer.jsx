import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* <span className='bg-cover h-screen opacity-25' style={{ backgroundImage: "url('/src/assets/images/footerbg.jpg')" }} /> */}
        <div className='z-[100] opacity-100 text-center bg-gray-100 py-[5rem]'>
          <p className='opacity-100 font-oswald font-light text-slate text-4xl'>WE GUARANTEE</p> {/* Corrected typo */}
          <h1 className=' font-bold  font-oswald  text-slate text-8xl'>30 MINUTES DELIVERY</h1>
          <p className=' font-light mt-3  font-oswald  text-slate text-3xl'>We give the best service and we also make the best burgers!</p>
          <button className=' px-10 py-4 bg-red-500 rounded-lg text-2xl font-oswald text-white hover:bg-red-700 mt-8 duration-300 transition'>
            Call (810) 941-2069
          </button>
        </div>
        <div className='px-[4rem] flex justify-evenly py-[5rem] border-b-2   w-full '>
          <div className='flex flex-col  '>
            <h1 className='text-2xl font-oswald font-semibold text-slate'>Location</h1>
            <p className='text-md mt-2'>953 Abipur Loop, Silezu </p>
          </div>
          <div>
            <h1 className='text-2xl font-oswald font-semibold text-slate'>Working hours</h1>
            <p className='text-md mt-2'>Mon-Fri 0900 - 2200 </p>
            <p className='text-md'>Saturday 1000 - 2030 </p>
            <p className='text-md'>Saturday 1200 - 1700 </p>
          </div>
          <div>
            <h1 className='text-2xl font-oswald font-semibold text-slate'>Order Now</h1>
            <p className='text-xl font-bold text-red-500 mt-2'>Call (810) 941-2069</p>
          </div>          
        </div>
        <div className='my-4 w-full text-lg  font-semibold text-gray-500'>
          <p className='text-center'>© {new Date().getFullYear()}<span className='text-red-500'> copyright</span>  {new Date().getUTCHours()}:{new Date().getUTCMinutes()} <em>UTC</em> Burgrill. All rights reserved </p>
        </div>
      </div>
  );
};

export default Footer;
