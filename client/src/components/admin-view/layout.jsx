import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'

function Adminlayout() {
  return (
    <div className='flex min-h-screen w-full'>

{/* admin-sidebar */}
<SideBar/>
<div className='flex flex-1 flex-col'>
{/* admin header */}
<AdminHeader/>

<main className='flex flex-1 bg-muted/40 p-4 md:p-6 '>
    <Outlet/>
</main>
</div>
    </div>
  )
}

export default Adminlayout