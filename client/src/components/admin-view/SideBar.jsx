import { ChartNoAxesCombined } from 'lucide-react'
import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Folders, LayoutDashboard, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet"

export const adminSidebarMenu = [

  {
    id:'dashboard',
    label:'Dashboard',	
    path:'/admin/dashboard',	
    icon:<LayoutDashboard/>

  },
  {
    id:'products',
    label:'Products',	
    path:'/admin/products',	
    icon:<ShoppingBasket/>

  },
  {
    id:'orders',
    label:'Orders',	
    path:'/admin/orders',	
    icon:<Folders/>

  },
]

function MenuItem({setOpen}){
  const navigate = useNavigate();
  const location = useLocation();

  return <nav className='mt-8 flex-col flex gap-2' >
{
  adminSidebarMenu.map((menuItem)=><div className={`text-lg flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground  cursor-pointer ${location.pathname === menuItem.path && ' bg-muted text-foreground '}`} key={menuItem.id} onClick={()=>{
  
  
  navigate(menuItem.path)
  setOpen? setOpen(false):null
  }}>
{menuItem.icon}<span>{menuItem.label}</span>
  </div>)
}
  </nav>
}

function SideBar({open, setOpen }) {

  const navigate = useNavigate();
  return (
    <Fragment>

<Sheet open={open} onOpenChange={setOpen}>

  <SheetContent side='left' className='w-64' >
<div className='flex flex-col h-full'>
<SheetHeader className='border-b'><div className='flex items-center justify-start mt-3 mb-3 '> <ChartNoAxesCombined size={25} className='mr-2' /> <span className='text-xl font-extrabold '>Admin Pannel</span></div></SheetHeader>
<MenuItem  setOpen={setOpen} />
</div>
  </SheetContent>
</Sheet>

      <aside className='hidden  w-64  flex-col  border-r bg-background p-6 lg:flex'>
<div onClick={()=> navigate('/admin/dashboard')} className='flex items-center gap-2  cursor-pointer'>
  <ChartNoAxesCombined size={30} />
<h1 className='text-2xl font-extrabold'>Admin Pannel</h1>
</div>
<MenuItem/>

      </aside>
    </Fragment>
  )
}

export default SideBar