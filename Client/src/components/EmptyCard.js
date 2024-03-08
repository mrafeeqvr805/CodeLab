import React from 'react'

const EmptyCard = ({title,des,img}) => {
  return (
    <div className='flex flex-col justify-items-center items-center gap-4'>
        <img src={img} alt='no_res' />
        <span className='text-xl text-gray-500 font-medium'>{title}</span>
        <p className='text-center text-gray-500 w-4/5'>{des}</p>
        <button className='rounded-full px-12 bg-primary text-white p-2'>
            Go Back
        </button>
    </div>
  )
}

export default EmptyCard