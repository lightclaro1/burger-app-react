import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='max-h-[500px] absolute h-full w-full bg-black/40 flex flex-col justify-center'>
           <h1  className='px-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gray-300' >The <span className='text-orange-500'>Best</span></h1>
           <h1  className='px-2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500'>Foods <span className='text-gray-300'>Delivered</span></h1>
        </div>

        <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='max-h-[500px] w-full object-cover' alt="" />
      </div>
    </div>
  )
}

export default Hero