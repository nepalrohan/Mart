import ProductFilter from '@/components/shopping-view/filter'
import ShoppingProductTile from '@/components/shopping-view/ShoppingProductTile'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuRadioItem, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuRadioGroup } from '@/components/ui/dropdown-menu'
import { sortOptions } from '@/config'
import { fetchAllFilteredProducts } from '@/store/shop/product-slice'
import { ArrowUpDownIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ShoppingListing() {
const dispatch = useDispatch();
const {productList} = useSelector(state=>state.shopProducts)
// fetch list of products

useEffect(()=>{
  dispatch(fetchAllFilteredProducts())
}, [dispatch])

  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6 '>


      <ProductFilter/>
      <div className='bg-background w-full rounded-lg shadow-sm'>
<div className="p-4 border-b flex items-center justify-between ">
  <h2 className="text-lg font-extrabold">All Products</h2>
  <div className='flex items-center gap-3'>
    <span className='text-muted-foreground '>143 Products</span>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
<Button variant='outline' size='sm' className='flex items-center gap-2 cursor-pointer'>
  <ArrowUpDownIcon className='h-4 w-4' />
  <span>Sort By</span>
</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align='end' className='w-[200px]'>
      <DropdownMenuRadioGroup>
        {
          sortOptions.map(sortItem=> <DropdownMenuRadioItem key={sortItem.id}>{sortItem.label}</DropdownMenuRadioItem>)
        }
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  </div>
  
</div>

{/* all products */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>


{
  productList && productList.length >0 ? 
  productList.map(productItem=><ShoppingProductTile  product={productItem} />):null
}
</div>
      </div>
    </div>
  )
}

export default ShoppingListing