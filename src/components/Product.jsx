import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <div className='p-5'>
        <div className='bg-[#f9f9f9]  max-w-[250px] rounded-xl py-4 p-4 relative'>
          <img className='w-full h-[180px]  bg-slate-50 object-contain' src={product.image} alt="singleimg" />
          <AiOutlineHeart className='bg-white w-7 h-7 p-1 rounded-full absolute top-3 right-4'/>
        </div>

        <div className='flex justify-between pt-2 max-w-[250px]'>
             <p className='text-md font-bold'>{product.title}</p>
             <p className='text-base font-bold flex items-center'>
              <BsCurrencyDollar fontSize={14}/> 
              {product.price}
              </p>
        </div>

        <div className='flex flex-col gap-2 pt-2 mb-2'>
            <p className='text-base font-medium'>lorem description</p>
              <Rating/>

             <Link to={`product/${product.id}`}>
             <button 
                className='w-[120px] text-black text-sm py-3 mt-2 px-4 border-2 border-gray-600 rounded-full bg-white border font-bold hover:bg-green-900 hover:text-white  transition duration-75'>
                Add To Cart
             </button>
             </Link>
        </div>
         
    </div>
  )
}

export default Product
