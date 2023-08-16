import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-10 py-5'>
        
        <div className='flex items-center gap-2'>
        <AiOutlineShoppingCart className='text-xl md:text-3xl font-extrabold'/>
         <Link to="/">
         <span className='text-xl md:text-3xl font-extrabold'>Shopcart</span>
         </Link>
        </div>

        <div className='items-center gap-5 hidden md:block md:flex'>
          <div className='flex items-center gap-1'>
             <span className='font-bold'>Cateogories</span>
             <BsArrowDownShort/>
          </div>

          <span className='font-bold'>Deals</span>
          <span className='font-bold'>Whats'New</span>
          <span className='font-bold'>Delivery</span>
        </div>

        <div className='flex items-center gap-2 md:gap-4 px-5 py-5'>
            <div className='flex items-center gap-2  px-4 text-white relative'>
               <input className='bg-gray-50 rounded-full outline-none px-10 py-2 text-gray-500' type="text" placeholder="Search Product" />
               <FaSearch className='absolute right-8 w-5 h-5 text-gray-400'/>
            </div>

            <div className='md:flex hidden md:block items-center gap-2 pr-4'>
               <FiUser className='font-bold'/>
               <span className='font-bold'>Account</span>
            </div>
            <div className='md:flex hidden md:block items-center gap-2 pr-4'>
               <TbShoppingCartPlus className='font-bold'/>
               <span className='font-bold'>Cart</span>
            </div>
        </div>


    </div>
  )
}

export default Header