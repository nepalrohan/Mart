import { LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import React, { use, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoopingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { useNavigate } from "react-router-dom";
import { logOutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { fetchCartItems } from "@/store/shop/cart-slice";
function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoopingViewHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-sm font-medium"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openCartSheet, setOpenCartSheet]= useState(false);
  const {cartItems} = useSelector((state)=>state.shopCart)


  function handleLogOut() {
    dispatch(logOutUser());
  }

  useEffect(()=>{

    dispatch(fetchCartItems(user?.id))
  },[dispatch])
  return (
    <div className="flex lg:items-center lg:flex-row  gap-4">
      <Sheet open={openCartSheet} onOpenChange={()=>setOpenCartSheet(false)}>
        <Button onClick={()=>setOpenCartSheet(true)} variant="outline" size="icon" className="cursor-pointer">
          <ShoppingCart className="w-6 h-6" />
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          } />
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-gray-700 flex items-center  justify-center cursor-pointer">
            <AvatarFallback className="bg-gray-700 text-white font-extrabold ">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>
            Logged in as:{" "}
            <span className="text-green-600">{user?.userName}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => navigate("/shop/account")}
          >
            <UserCog className="mr-2 h-6 w-6" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogOut}>
            <LogOut className="mr-2 h-6 w-6" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 ">
        <Link to="/shop" className="flex items-center gap-2 ">
          <img src="/icon.svg" height={35} width={35} />
          <span className="font-extrabold text-4xl bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text  ">
            Emart
          </span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <HeaderRightContent />

            <MenuItems />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block ">
          <MenuItems />
        </div>
        {isAuthenticated ? (
          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default ShoppingHeader;
