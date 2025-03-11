import React from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, Trash } from "lucide-react";

function UserCartItemsContent({ cartItem }) {
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
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <span>{cartItem?.quantity}</span>
          <Button
            className="h-6 w-6   rounded-full ml-2 shadow-md cursor-pointer"
            variant={"outline"}
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

        <Trash className="cursor-pointer mt-1" size={20} />
      </div>
    </div>
  );
}

export default UserCartItemsContent;
