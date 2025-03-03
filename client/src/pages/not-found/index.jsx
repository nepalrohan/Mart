import React from 'react'
import ErrorImage from '@/assets/error.svg'
function NotFound() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <img src ={ErrorImage}   alt="Page Not Found" className='h-[70%] w-[70%] animate-bounce transition delay-1500 duration-5000 ease-in-out ' />
    </div>
  )
}

export default NotFound