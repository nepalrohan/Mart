import React from 'react'
import accImg from '../../assets/banner2.jpg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Orders from '@/components/shopping-view/orders';
import Address from '@/components/shopping-view/address';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
function ShoppingAccount() {

  const {user} = useSelector(state=>state.auth);
  return (
    <div className='flex flex-col'>

<div className="relative h-[200px] w-full overflow-hidden">
{/* <img src={accImg}   width={'1600'} height={'300'}    alt="" className='h-full w-full object-cover object-center ' /> */}
{/* <Card >
  <CardHeader>
    <CardTitle className=' text-xl font-bold'>Profile</CardTitle>
  </CardHeader>

  <CardContent className=' flex flex-col items-start justify-center'>
<Label className=' font-semibold text-cyan-600'>Username:{user.userName}</Label>
<Label className=' font-semibold text-cyan-600'>Email:{user.email}</Label>

  </CardContent>
</Card> */}

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

<TabsContent  value='orders'><Orders/></TabsContent>
<TabsContent  value='address'><Address/></TabsContent>


</Tabs>

        </div>
      </div>
    </div>
  )
}


export default ShoppingAccount;