import { Router } from "express";


import {
  addToCart,
  fetchCartItems,
  updateCartItem,
  deleteCartItem,
} from "../../controllers/shop/cart-controller.js";

const router = Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update-cart", updateCartItem);
router.delete("/delete/:userId/:productId", deleteCartItem);

export default router;
