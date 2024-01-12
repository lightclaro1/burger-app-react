import React, { useState } from 'react'
import { RiMenu3Fill,RiInboxArchiveFill } from "react-icons/ri";
import { IoIosSearch, IoMdClose, IoIosPricetag } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart,FaShippingFast,FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite,MdHelp } from "react-icons/md"


const NavLinks = [
    {
        id: 1,
        icon: <FaShippingFast /> ,
        name: 'Orders'
    },
    {
        id: 2,
        icon: <MdFavorite /> ,
        name: 'Favorites'
    },
    {
        id: 3,
        icon: <FaWallet />,
        name: 'Wallets'
    },
    {
        id: 4,
        icon: <MdHelp />,
        name: 'Help'
    },
    {
        id: 5,
        icon: <IoIosPricetag />,
        name: 'Promotions'
    },
    {
        id: 6,
        icon: <RiInboxArchiveFill />,
        name: 'Best Ones'
    },
    {
        id: 7,
        icon: <FaUserFriends />,
        name: 'Invite Friends'
    },
   
]

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const NavClick = () => { setNav(!nav)};



  return (
    <>
    <div className='container'>
        <div className='py-2'>
        <div className='flex text-center items-center justify-between'>
            <div className='flex text-center items-center'>
                <div>
                <RiMenu3Fill size={24} onClick={() => setNav(!nav) } /> 
                </div>
                     <div> <h1 className='text-2xl ml-2'>Best<span className='font-bold'> Eats</span> </h1></div>
                     <div className='hidden sm:flex  bg-gray-200 text-[14px] rounded-full  ml-1'>
                <p className='p-2 bg-black rounded-full text-white'>Delivery</p>
                <p className='p-2'>PickUp</p>
            </div>
                </div>
                


            <div className='flex w-[200px] bg-gray-300 p-1 rounded-full  justify-between'>
                <div className='flex items-center'>
                <IoIosSearch size={18} /> <input type="text" placeholder='Search here' className='bg-transparent outline-none ' />
                </div>

            </div>
        </div>

      


        </div>
    </div>



          {/*  MENU LINE   */}


    {nav ? <div className=' fixed top-0 left-0 w-full h-screen bg-black/80 z-10' onClick={() => setNav(!nav)}>

</div> : "" }

  <div className={nav ? 'top-0 left-0 w-[300px] bg-white h-screen fixed z-10 duration-300' : 'top-0 left-[-100%] w-[300px] bg-white h-screen fixed z-10 duration-300'}>

        <IoMdClose size={18} className='absolute right-4 top-4' onClick={() => setNav(!nav) } />
        
        <h1 className='text-2xl p-2'>Best <span className='font-bold'>Eats</span></h1>


        <nav>
            <ul className='flex flex-col gap-4 p-2 mt-4'>
                    {NavLinks.map((data) => (<li className='flex items-center gap-2 text-medium cursor-pointer'> {data.icon}{data.name} </li>))}
            </ul>
        </nav>

 



  </div>




      </>
  )
}

export default Navbar