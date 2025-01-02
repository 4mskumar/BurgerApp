import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-gray-50 py-[8rem] overflow-hidden'>
        <div className=' flex-col h-[35rem] flex items-center mx-auto  '>

            <h1 className='text-7xl font-oswald text-slate text-center w-[55rem]'>Burgers tastes good when you eat them with your loved ones</h1>
            <p className='text-gray-500  font-lg text-center mt-4 w-[55rem]'>Burgers are more than just a meal – they become an experience when shared with your loved ones. There's something about enjoying a delicious, perfectly grilled burger that brings people closer, creating moments filled with laughter, conversation, and the simple joy of great food. </p>
            <button className='text-slate z-10 rounded-lg font-oswald bg-yellow-500 font-medium hover:bg-yellow-200 text-xl hover:scale-105 transition duration-300 px-10 py-3 mt-8'>Explore menu</button>
            <img src="/src/assets/images/floating-burger.png" className='w-[100rem] h-[140rem] -mt-[26rem] rotate-90' alt="" />
        </div>
    </div>
  )
}

export default Testimonial
