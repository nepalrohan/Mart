import Address from "../../models/address.js";

export const addAddress = async (req, res) => {
  try {
    const { userId, address, city, pinCode, phone, notes } = req.body;

    if (!userId || !address || !city || !pinCode || !phone || !notes) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided",
      });
    }

    const newlyCreatedAddress = new Address({
      userId,
      address,
      city,
      pinCode,
      phone,
      notes,
    });

    await newlyCreatedAddress.save();

    return res.status(201).json({
      success: true,
      data: newlyCreatedAddress,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error adding address",
    });
  }
};

export const fetchAllAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "UserId must be provided ",
      });
    }

    const addressList = await Address.find({ userId });
    if (!address) {
      return res.status(400).json({
        success: false,
        message: "No address found",
      });
    }

    return res.status(200).json({
      success: true,
      data: addressList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error adding address",
    });
  }
};

export const editAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    const formData = req.body;

    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "UserId and AddressId are required.",
      });
    }

    const address = await Address.findOneAndUpdate(
      {
        _id: addressId,
        userId,
      },
      formData,
      { new: true }
    );

if(!address){
    return res.status(404).json({
        success:false,
        message:'Address not found'
    })
}

return res.status(200).json({
    success:true,
    data:address
})
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error adding address",
    });
  }
};

export const deleteAddress = async (req, res) => {
  try {

    const { userId, addressId } = req.params;
    const formData = req.body;

    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "UserId and AddressId are required.",
      });
    }

    const address = await Address.findOneAndDelete(
      {
        _id: addressId,
        userId,
      }
    
    );

if(!address){
    return res.status(404).json({
        success:false,
        message:'No address found'
    })
}

return res.status(200).json({
    success:true,
    message:'Address deleted successfully'    
})

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error adding address",
    });
  }
};

