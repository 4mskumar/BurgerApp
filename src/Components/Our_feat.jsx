import React from 'react'
import { RiEBike2Line } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import { IoFastFoodOutline } from 'react-icons/io5';

const Our_feat = () => {
  return (
    <div className='flex bg-yellow-500 gap-14  items-center justify-evenly px-20 py-20'>
      <div className=' w-[20rem] flex flex-col justify-center items-center'>
        <GiFullPizza size={120} />
        <h1 className='text-3xl font-medium  mt-3 font-oswald '>ORIGINAL</h1>
        <p className='text-slate text-md text-center mt-2'>Enjoy the authentic taste of our unique recipes made fresh every day.</p>
      </div>
      <div className=' w-[20rem] flex flex-col justify-center items-center'>
        <IoFastFoodOutline size={120} />
        <h1 className='text-3xl font-medium  mt-3 font-oswald '>QUALITY FOOD</h1>
        <p className='text-slate text-md text-center mt-2'>We bring you the best quality ingredients, ensuring every bite is flavorful and nutritious.</p>
      </div>
      <div className=' w-[20rem] flex flex-col justify-center items-center'>
        <RiEBike2Line size={120} />
        <h1 className='text-3xl font-medium  mt-3 font-oswald '>FAST DILIVERY</h1>
        <p className='text-slate text-md text-center mt-2'>Get your delicious meals delivered hot and fresh at lightning speed!</p>
      </div>
    </div>
  )
}

export default Our_feat
