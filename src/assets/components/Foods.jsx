import React, { useState } from 'react'
import {data} from '../Data/data.js'

const Foods = () => {

    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
          data.filter((item) => {
            return item.category === category;
          })
        );
      };

      const filterPrice = (price) => {
        setFoods(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };



  return (
    <div className='p-4'>
         
        <div className='py-8'>
            <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-600 mb-2'>Top Rated Menu Items</h1>
           
           
            {/* FILTER MENU*/}
                <div className='py-2'>
                    <h4 className='text-sm font-medium'>Filter Type</h4>
                    <div className='flex gap-1'>
                    <button onClick={() => setFoods(data)} className=' px-4 py-1/2  rounded-full border border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white duration-500'>All</button>
                    <button onClick={() => filterType('burger')} className=' px-4 py-1/2 rounded-full border border-orange-500 text-orange-700  hover:bg-orange-500 hover:text-white duration-500' >Burgers</button>
                    <button onClick={() => filterType('pizza')} className=' px-4 py-1/2 rounded-full border border-orange-500 text-orange-700  hover:bg-orange-500 hover:text-white duration-500' >Pizza</button>
                    <button onClick={() => filterType('salad')} className=' px-4 py-1/2 rounded-full border border-orange-500 text-orange-700  hover:bg-orange-500 hover:text-white duration-500'>Salads</button>
                    <button onClick={() => filterType('chicken')}  className=' px-4 py-1/2 rounded-full border border-orange-500 text-orange-700  hover:bg-orange-500 hover:text-white duration-500'>Chickens</button></div>
                </div>

                <div className='py-2'>
                    <h4 className='text-sm font-medium'>Filter Price</h4>
                    <div className='flex gap-4'>
                         <button onClick={() => filterPrice('$')} className=' px-4 py-1/2  rounded-full border border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white duration-500'>$</button>
                         <button onClick={() => filterPrice('$$')} className=' px-4 py-1/2  rounded-full border border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white duration-500'>$$</button>
                         <button onClick={() => filterPrice('$$$')} className=' px-4 py-1/2  rounded-full border border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white duration-500'>$$$</button>
                         <button onClick={() => filterPrice('$$$$')} className=' px-4 py-1/2  rounded-full border border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white duration-500'>$$$$</button></div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 '>

                    {foods.map((item, index) => (
                        <div className='border shadow-lg hover:scale-105 duration-500 gap-2 relative ' key={index}>
                        <div className='absolute w-full h-[200px] hover:bg-black/40 duration-500 hover:rounded-t-lg' >
                        </div>    

                            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                           
                            <div className='flex justify-between px-1 py-1'>
                            <p className='font-medium'>{item.name}</p>
                            <p className='bg-orange-500 px-1 rounded-full text-white'>{item.price}</p>
                            </div>
                        </div>
                    ) )}

                </div>

        </div>
    </div>
  )
}

export default Foods