import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast } from "sonner";
import { setProductDetails } from "@/store/shop/product-slice";

function ProductDetailsDialogue({ open, setOpen, productDetails }) {

const dispatch = useDispatch();
const {user} = useSelector((state)=>state.auth)


function handleDialogClose(){
  setOpen(false);
  dispatch(setProductDetails());
}


  function handleAddToCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
      console.log(user?.id, "id ho ma")
        
        toast.success(" Product added successfully")
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="max-h-[95vh] overflow-auto  grid  grid-cols-1 md:grid-cols-2 gap-8 sm:p-12 max-w-[90vw]  sm:max-w-[80vw] lg:max-w-[70vw]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <div className="grid gap-6">
            <h1 className="font-bold text-xl">{productDetails?.title}</h1>
            <p className="text-muted-foreground mt-4 mb-5">
              {productDetails?.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary  ${
                productDetails?.salePrice > 0
                  ? "line-through text-red-500 "
                  : ""
              }`}
            >
              Rs.{productDetails?.price}
            </p>

            {productDetails?.salePrice > 0 ? (
              <p className="text-2xl font-bold text-muted-foreground">
                Rs.{productDetails.salePrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-yellow-400" />
              <StarIcon className="w-5 h-5 fill-yellow-400" />
              <StarIcon className="w-5 h-5 fill-yellow-400" />
              <StarIcon className="w-5 h-5 fill-yellow-400" />
              <StarIcon className="w-5 h-5 fill-yellow-400" />
            </div>
            <span className="text-muted-foreground">(4.5)</span>
          </div>
          <div className="mt-5 mb-8">
            <Button className="w-full cursor-pointer "  onClick={()=>handleAddToCart(productDetails?._id)}>Add to Cart</Button>
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6 ">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>RN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">rohan002</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                  </div>

                  <p className="text-muted-foreground">
                    This is an awasome product
                  </p>
                </div>
              </div>
              {/* pasting for more reviews */}
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>RN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">rohan002</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                  </div>

                  <p className="text-muted-foreground">
                    This is an awasome product
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>RN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 ">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">rohan002</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                    <StarIcon className="w-5 h-5 fill-yellow-400" />
                  </div>

                  <p className="text-muted-foreground">
                    This is an awasome product
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2 items-center">
              <Textarea placeholder="Write a review" />
              <Button className="cursor-pointer">Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialogue;





