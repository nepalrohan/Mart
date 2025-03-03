import React from 'react'
import ErrorImage from '@/assets/error.svg'
function NotFound() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <img src ={ErrorImage}   alt="Page Not Found" className='h-[70%] w-[70%]  ' />
    </div>
  )
}

export default NotFound