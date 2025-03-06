import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'

function Adminlayout() {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>

{/* admin-sidebar */}
<SideBar  open={openSidebar} setOpen={setOpenSidebar}/>
<div className='flex flex-1 flex-col'>
{/* admin header */}
<AdminHeader   setOpen={setOpenSidebar} />

<main className='flex flex-1 flex-col bg-secondary p-4 md:p-6 '>
    <Outlet/>
</main>
</div>
    </div>
  )
}

export default Adminlayout