import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ShoppingOrders from '@/components/shopping-view/orders';
import Address from '@/components/shopping-view/address';
function ShoppingAccount() {

  return (
    <div className='flex flex-col'>

<div className="relative h-[50px] w-full overflow-hidden flex items-center justify-start">
{/* <img src={accImg}   width={'1600'} height={'300'}    alt="" className='h-full w-full object-cover object-center ' /> */}


</div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 ">

        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">


<Tabs defaultValue='orders'>
<TabsList>
  <TabsTrigger value ='orders' className='cursor-pointer'>
Orders
  </TabsTrigger>
  <TabsTrigger value ='address' className='cursor-pointer'>
Address
  </TabsTrigger>
</TabsList>

<TabsContent  value='orders'><ShoppingOrders/></TabsContent>
<TabsContent  value='address'><Address/></TabsContent>


</Tabs>

        </div>
      </div>
    </div>
  )
}


export default ShoppingAccount;