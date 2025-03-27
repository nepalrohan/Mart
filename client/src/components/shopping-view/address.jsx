import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CommonForm from "../common/form";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewAddress,
  deleteAddress,
  editAddress,
  fetchallAddresses,
} from "@/store/shop/address-slice";
import AddressCard from "./addressCard";
import { toast } from "sonner";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pinCode: "",
  notes: "",
};

function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addresslist } = useSelector((state) => state.shopAddress);



  function handleManageAddress(e) {
    e.preventDefault();

if(addresslist.length >= 3 && currentEditedId ===null){
  toast.error('You can only add maximum 3 addresses');
  return;
}
   currentEditedId !==null ?
   dispatch(editAddress({userId: user?.id, addressId: currentEditedId, formData})).then((data)=>{
    if(data?.payload?.success){
      dispatch(fetchallAddresses(user?.id));
    setCurrentEditedId(null);
    setFormData(initialAddressFormData);
    toast.success('Address updated successfully');
    }
   })
   : dispatch(createNewAddress({ ...formData, userId: user?.id })).then(
    (data) => {
      if (data?.payload?.success) {
        dispatch(fetchallAddresses(user?.id));
        setFormData(initialAddressFormData);
        toast.success("Address added successfully");
      }
    }
  );
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

 

  function handleDeleteAddress(getCurrentAddress) {
    dispatch(
      deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchallAddresses(user?.id));
        toast.success("Address deleted successfully");
      }
    });
  }



function handleEditAddress(getCurrentAddress) {
    setCurrentEditedId(getCurrentAddress._id);
    setFormData({
      ...formData,
      address: getCurrentAddress.address,
      city: getCurrentAddress.city,
      phone: getCurrentAddress.phone,
      pinCode: getCurrentAddress.pinCode,
      notes: getCurrentAddress.notes,
    });
  }

  useEffect(() => {
    dispatch(fetchallAddresses(user?.id));
  }, []);


  return (
    <Card className=' mb-4'>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {addresslist && addresslist.length > 0
          ? addresslist.map((item) => (
              <AddressCard
                addressInfo={item}
                handleDeleteAddress={handleDeleteAddress}
               handleEditAddress={handleEditAddress}
              />
            ))
          : null}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{ currentEditedId !==null ? ' Edit Address':'Add New Address'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 w-full  mb-4">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={currentEditedId !==null ? ' Edit':'Add'}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;
