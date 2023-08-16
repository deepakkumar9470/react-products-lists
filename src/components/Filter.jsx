import React from 'react'
import {BsFillMenuAppFill,BsArrowDownShort} from 'react-icons/bs'


const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-10 py-14'>
        <div className='flex justify-between items-center gap-4 flex-col md:flex-row'>
            
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Headphone Type</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Price</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Review</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Color</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Material</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Offer</span>
            <BsArrowDownShort className='font-bold'/>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>All Filters</span>
            <BsArrowDownShort className='font-bold'/>
        </div>

        </div>

        <div className='flex items-center gap-2 bg-white border  rounded-full px-5 py-2'>
            <span className='font-bold text-sm'>Sort By</span>
            <BsFillMenuAppFill className='font-bold'/>
        </div>
    </div>
  )
}

export default Filter