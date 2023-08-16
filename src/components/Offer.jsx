import React from 'react'
import {BsTelephone,BsArrowDownShort} from 'react-icons/bs'
const Offer = () => {
  return (
    <div className='hidden md:block md:flex w-full px-6 py-4 bg-green-800 text-white flex justify-between items-center'>

        <div className='flex items-center gap-2'>
            <BsTelephone/>
            <span>+9494849494</span>
        </div>
         <div>
            <p>Get 50% Off on Selected Items | Shop Now </p>
         </div>

         <div className='flex items-center gap-5'>

            <div className='flex items-center'>
            <span>Eng</span>
            <BsArrowDownShort/>
            </div>
            <div className='flex items-center'>
            <span>Location</span>
            <BsArrowDownShort/>
            </div>

         </div>

    </div>
  )
}

export default Offer