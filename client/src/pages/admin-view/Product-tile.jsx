import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Delete, DeleteIcon, Edit } from 'lucide-react'
import React from 'react'


function AdminProductTile({product, setFormData, setOpenAddProduct,setCurrentEditedId, handleDelete}) {

    console.log('productid', product._id)
  return (
    <Card className='w-full max-w-sm mx-auto'>

<div>
    <div className='relative'>
        <img 
        
        src={product?.image}
        alt={product?.title}
        className='w-full h-[250px] object-cover rounded-t-lg '
        
        />

    </div>
    <CardContent>
        <h2 className='text-sm font-medium text-slate-600  mb-2 mt-2'>{product?.title.length >70 ? product?.title.slice(0,70)+'...' :product?.title }</h2>
        <div className='flex flex-col items-start mb-2'>
            <div className='flex items-center'>
                <span className='text-slate-600 font-medium '>Original Price:</span>
            <span className={`text-lg font-medium text-muted-foreground  ${product.salePrice >0 ? 'line-through':''} `}> &#8360;.{product?.price}</span>
            </div>
         
           {
            product?.salePrice >0 ?  <div className='flex items-center'>
                <span className='text-slate-600 font-medium '>Discounted Price:</span>

<span className='text-lg text-green-600 font-medium '>&#8360;.{product?.salePrice}</span>
            </div>: null
           }

            
            </div>
    </CardContent>

    <CardFooter  className='flex justify-between items-center mb-4 '>
        <Button  className='cursor-pointer flex items-center'  onClick={()=>{
            setOpenAddProduct(true);
            setCurrentEditedId(product?._id);
            setFormData(product);
        }}>
            <Edit  className='text-green-300' />
            <span>

            Edit
            </span>
        </Button>
        <Button className='cursor-pointer flex items-center'  
        
        onClick={()=>handleDelete(product._id)}
        >
            <DeleteIcon  className='text-red-300' />
            <span>

            Delete
            </span>
        </Button>
        
    </CardFooter>
</div>

    </Card>
  )
}

export default AdminProductTile