import React from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deletecartItem, updateCartItem } from "@/store/shop/cart-slice";
import { toast } from "sonner";

function UserCartItemsContent({ cartItem }) {
const dispatch = useDispatch();
const {user} = useSelector(state=>state.auth)

function handleCartItemDelete(getCartItem){
dispatch(deletecartItem({userId:user?.id, productId:getCartItem.productId}))
toast.success('Product deleted successfully')
}


function handleUpdateQuantity(getCartItem, typeOfAction){
  dispatch(updateCartItem({userId:user?.id, productId:getCartItem.productId, quantity:
    typeOfAction === 'plus'?
    getCartItem?.quantity+1:
    getCartItem?.quantity-1

  })).then(data=>{if(data.payload.success){
toast("Cart item updated successfully")
  }})
}

  console.log(cartItem, "cart item");
  return (
    <div className="flex items-center space-x-4 shadow-sm p-2 bg-muted">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-bold text-muted-foreground">
          {cartItem?.title?.slice(0, 20) + "..."}
        </h3>
        <div className="flex items-center mt-1  ">
          <Button
            className="h-6 w-6  rounded-full mr-2 shadow-md cursor-pointer"
            variant={"outline"}
            onClick={()=>handleUpdateQuantity(cartItem, 'minus')}
            disabled={cartItem?.quantity === 1}
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <span>{cartItem?.quantity}</span>
          <Button
            className="h-6 w-6   rounded-full ml-2 shadow-md cursor-pointer"
            variant={"outline"}
            onClick={()=>handleUpdateQuantity(cartItem, 'plus')}

          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          Rs.
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>

        <Trash className="cursor-pointer mt-1 text-red-600" size={20} 
        onClick={()=>handleCartItemDelete(cartItem)}
        
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;
