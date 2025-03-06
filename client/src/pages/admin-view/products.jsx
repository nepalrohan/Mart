import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { addNewProduct, fetchAllProducts } from "@/store/admin/products-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

function AdminProducts() {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const  { productList ,isLoading} = useSelector((state)=>state.adminProducts);

  const dispatch = useDispatch();


  function onSubmit(e) {
e.preventDefault();

dispatch(addNewProduct({
  ...formData,
  image:uploadedImageUrl
})).then((data)=>{
  
  console.log(data)
  if(data?.payload?.success){
    dispatch(fetchAllProducts);

    setImageFile(null);
    setFormData(initialFormData);
    toast('Product added successfully');
    setOpenAddProduct(false);

  }

})

  }



  useEffect(()=>{
    dispatch(fetchAllProducts)
  },[dispatch])

  return (
    <Fragment>
      <div className="flex justify-end mb-5 w-full">
        <Button
          onClick={() => setOpenAddProduct(true)}
          className="cursor-pointer "
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 "></div>

      <Sheet
        open={openAddProduct}
        onOpenChange={() => setOpenAddProduct(false)}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle className="font-bold text-center text-xl">
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            setImageLoading={setImageLoading}
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            imageLoading={imageLoading}
          />
          <div className="py-6 px-4">
            <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText="Add "
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
