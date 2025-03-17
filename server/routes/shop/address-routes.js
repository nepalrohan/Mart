import { Router } from "express";


import { addAddress, editAddress, deleteAddress, fetchAllAddress} from '../../controllers/shop/address-controller.js'

const router = Router();

router.post("/add", addAddress);
router.get("/get/:userId", fetchAllAddress);
router.put("/update/:userId/:addressId", editAddress);
router.delete("/delete/:userId/:addressId", deleteAddress);

export default router;
