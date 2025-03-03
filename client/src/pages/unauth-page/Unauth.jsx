import React from 'react'
import UnauthorizedImage from '@/assets/unauthorized.svg'
function Unauth() {
  return (
    <div className='flex h-screen items-center justify-center w-full '>
        <img src ={UnauthorizedImage}   alt="Unauthorized user warning" className='h-[70%] w-[70%]  ' />

    </div>
  )
}

export default Unauth