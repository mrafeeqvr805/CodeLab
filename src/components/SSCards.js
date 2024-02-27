import React from 'react'
import { useDispatch } from 'react-redux'
import { removeScreenshot } from '../utils/screenshotSlice'

const SSCards = ({img,index}) => {
    const dispatch = useDispatch()
    const removeHandler = () =>{
        dispatch(removeScreenshot(index))
    }
  return (
    <div className='border-2 rounded-md p-1 h-24 relative'>
        <img className='h-full w-full' src={img} alt='icon' />
        <button type='button' onClick={removeHandler} className='absolute top-0 right-0 bg-slate-50 h-7 w-7 rounded-full' >
            <i class="bi bi-x text-xl"></i>
        </button>
    </div>
  )
}

export default SSCards