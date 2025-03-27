import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'

function ShoppingOrders() {
  return (
    <Card>

 <CardHeader>
  <CardTitle className=' text-2xl font-bold '>Order History</CardTitle>
 </CardHeader>
<CardContent>

  <Table>
    <TableHeader className=' bg-muted'>
      <TableRow>
        <TableHead className=' md:text-xl font-bold text-cyan-600 border-r-2'>Order ID</TableHead>
        <TableHead className=' md:text-xl font-bold text-cyan-600 border-r-2'>Order Date</TableHead>
        <TableHead className=' md:text-xl font-bold text-cyan-600 border-r-2'>Order Status</TableHead>
        <TableHead className=' md:text-xl font-bold text-cyan-600 border-r-2'>Order Price</TableHead>
        <TableHead>
          <span className='sr-only'>Details</span>
        </TableHead>


      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className='border-r-2 text-muted-foreground'>12423432</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>27-06-2024</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>Pending</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>Rs.3000</TableCell>
        <TableCell>
<Button className=' cursor-pointer'>View Details</Button>

        </TableCell>
        

      </TableRow>

      <TableRow>
        <TableCell className='border-r-2 text-muted-foreground'>12423432</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>27-06-2024</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>Pending</TableCell>
        <TableCell className='border-r-2 text-muted-foreground'>Rs.3000</TableCell>
        <TableCell>
<Button className=' cursor-pointer'>View Details</Button>

        </TableCell>
        

      </TableRow>
    </TableBody>
  </Table>
</CardContent>

    </Card>
  )
}


export default ShoppingOrders