import express from "express";
import { CouponController, CouponController } from "./mvc/controllers/coupon.controller.js";
import { PorductController } from "./mvc/controllers/product.controllers.js";
const app = express();
const productController = new PorductController()
app.post("/product/buy", productController.buyproduct);

app.post("product/refund", productController.refundProduct);

const couponController = new CouponController()
app.post("coupons/buy", couponController.buyCoupon);
app.listen(3000);