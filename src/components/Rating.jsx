import React from 'react'
import { FaRegStar } from 'react-icons/fa'

const Rating = () => {
  return (
    <div className='flex gap-1 items-center'>
                <FaRegStar color="green"/>
                <FaRegStar color="green"/>
                <FaRegStar color="green"/>
                <FaRegStar color="green"/>
                <FaRegStar color="green"/>
                <span className='text-small font-semibold'>(121)</span>
             </div>
  )
}

export default Rating