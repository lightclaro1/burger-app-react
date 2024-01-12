import React from 'react'

const Content = () => {
  return (
    <div className='w-full mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-6'>
        <div data-aos="fade-up" data-aos-delay="100" className='relative  hover:scale-105 duration-500  '>
            <div className='absolute w-full h-full bg-black/40 hover:bg-black/20  duration-300 rounded-xl'>
                <p className='px-2 mt-2 text-lg font-medium text-gray-100'>Sun's Outm BOGO's Out</p>
                <p className='px-2 text-gray-100'>Through 8/26</p>

                <button className='absolute bottom-4 px-4 py-1 bg-gray-200 rounded-full ml-2 hover:bg-orange-400 duration-500 font-medium'>Order Now</button>

            </div>

            <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
        </div>

    <div data-aos="fade-up" data-aos-delay="200" className='relative  hover:scale-105 duration-500  '>
            <div className='absolute w-full h-full bg-black/40 hover:bg-black/20  duration-300 rounded-xl'>
                <p className='px-2 mt-2 text-lg font-medium text-gray-100'>New Restaurents</p>
                <p className='px-2 text-gray-100'>Added Daily</p>

                <button className='absolute bottom-4 px-4 py-1 bg-gray-200 rounded-full ml-2 hover:bg-orange-400 duration-500 font-medium '>Order Now</button>

            </div>

            <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
        </div>       



    <div data-aos="fade-up" data-aos-delay="300" className='relative  hover:scale-105 duration-500  '>
            <div className='absolute w-full h-full bg-black/40 hover:bg-black/20  duration-300 rounded-xl'>
                <p className='px-2 mt-2 text-lg font-medium text-gray-100'>We Deliver Desserts Too</p>
                <p className='px-2 text-gray-100'>Tasty Treats</p>

                <button className='absolute bottom-4 px-4 py-1 bg-gray-200 rounded-full ml-2 hover:bg-orange-400 duration-500 font-medium '>Order Now</button>

            </div>

            <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
        </div>         


    </div>



  )
}

export default Content