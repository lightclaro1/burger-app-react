import React from 'react'
import {categories} from '../Data/data.js'

const FooterCategory = () => {

  return (
    <div className='p-4 w-full mx-auto relative'>
          
          
          <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-600 mb-2'>Top Rated Menu Items</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4  '>
       
                {categories.map((category, index) => (
                    <div className='flex items-center justify-between bg-gray-100 px-4 hover:scale-105 duration-500'>
                    
                        <h1 className='font-bold sm:text-xl'>{category.name}</h1>
                        <img src={category.image} alt="" className='w-20' />
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FooterCategory