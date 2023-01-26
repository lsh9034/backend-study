import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { PorductController } from "./mvc/controllers/product.controllers.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";
const app = express();

const productService = new ProductService();
const cashService = new CashService();
const pointService = new PointService();

const productController = new PorductController(cashService, productService);
app.post("/products/buy", productController.buyproduct);
app.post("/products/refund", productController.refundProduct);

const couponController = new CouponController(pointService)
app.post("/coupons/buy", couponController.buyCoupon);
app.listen(3000, () =>{
    console.log(`Example app listening on port ${3000}`)
})