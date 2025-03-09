import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function ShoppingProductTile({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[250px] object-cover rounded-t-lg"
          />

          {product?.salePrice > 0 ? (
            <Badge className="absolute  top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>

        <CardContent className="p-4">
          <h2 className="text-lg font-semibold text-primary mb-2 leading-tight">
            {product?.title.length>28 ? product?.title.slice(0, 28) + "..." :product?.title}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              {product?.category[0].toUpperCase() + product?.category.slice(1)}
            </span>
            <span className="text-sm text-muted-foreground">
              {product?.brand[0].toUpperCase() + product?.brand.slice(1)}
            </span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span
              className={` ${
                product?.salePrice > 0
                  ? "line-through text-muted-foreground font-semibold"
                  : "text-primary "
              }text-lg `}
            >
              Rs.{product?.price}
            </span>
            {product.salePrice > 0 ? (
              <span className="text-lg text-primary font-semibold">
                Rs.{product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="mb-4 ">
          <Button className="w-full cursor-pointer">Add to Cart</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ShoppingProductTile;
