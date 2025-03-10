import React from 'react'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

function UserCartItemsContent({cartItem}) {
  return (
    <div className='flex items-center space-x-4'>
<img src={cartItem?.image} alt={cartItem?.title} 
className='w-20 h-20 rounde object-cover'
/>
<div className='flex-1'>
<h3 className='font-extrabold'>{cartItem?.title}</h3>
<div className='flex items-center mt-1 gap-4'></div>
<Button className='h-8 w-8 rounded-full shadow-md' variant={'outline'}><MinusIcon className='w-4 h-4' /></Button>
<span>{cartItem?.quantity}</span>
<Button className='h-8 w-8 rounded-full shadow-md' variant={'outline'}><PlusIcon className='w-4 h-4' /></Button>
</div>

    </div>
  )
}

export default UserCartItemsContent