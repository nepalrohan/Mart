import React from "react";
import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logOutUser } from "@/store/auth-slice";
function AdminHeader({ setOpen }) {
const dispatch = useDispatch();

function handleLogOut(){
dispatch(logOutUser());

}

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button
        className="lg:hidden block cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="flex flex-1 justify-end">
        <Button
          className="cursor-pointer inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          onClick={handleLogOut}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
