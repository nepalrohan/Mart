import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function AuthLayout() {
  const location = useLocation();
  return (
    <div className='flex min-h-screen w-full'>
<div className='hidden lg:flex  bg-gray-800 w-1/2 rounded-tr-full  '>
      
<div className='hidden lg:flex  items-center justify-center h-full bg-zinc-100 w-[96%] px-12  rounded-tr-full '>

<div className='max-w-md space-y-6 text-center text-primary-foreground'>
  
<h1 className='text-4xl bg-gradient-to-r from-gray-400 to-gray-800  text-transparent bg-clip-text font-extrabold tracking-tight'>{
  location.pathname === '/auth/login' ? 'Welcome Back!': 'Welcome to Emart!'
  }</h1>
</div>
</div>
</div>
<div className='flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 '>

<Outlet/>
</div>
    </div>
  )
}

export default AuthLayout