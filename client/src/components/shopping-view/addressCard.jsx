import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function AddressCard({addressInfo, handleEditAddress, handleDeleteAddress}) {
  return (
    <Card>
        <CardContent className='grid gap-4 p-4'>
            <Label><span className='text-cyan-600'> Address:</span> {addressInfo?.address}</Label>
            <Label><span className='text-cyan-600'> City:</span>  {addressInfo?.city}</Label>
            <Label><span className='text-cyan-600'> Pin Code:</span> {addressInfo?.pinCode}</Label>
            <Label><span className='text-cyan-600'> Phone Number:</span> {addressInfo?.phone}</Label>
            <Label><span className='text-cyan-600'> Additional Note:</span> {addressInfo?.notes}</Label>

        </CardContent>
        <CardFooter className=' flex mb-4 items-center justify-between'>
    <Button onClick={()=>handleEditAddress(addressInfo)}  className=' text-white font-semibold bg-green-600 cursor-pointer'>Edit</Button>
    <Button onClick={()=>handleDeleteAddress(addressInfo)} className=' text-white font-semibold bg-red-600 cursor-pointer'>Delete</Button>

        </CardFooter>
    </Card>
  )
}

export default AddressCard