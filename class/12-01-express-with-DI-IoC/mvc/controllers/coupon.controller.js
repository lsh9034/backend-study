import { CashService } from "./services/cash.service.js";
export class CouponController {
    constructor(moneyService){
        this.moneyService = moneyService;
    }
    buyCoupon = (req, res)=>{
        const hasMoney = this.moneyService.checkValue();
        if(hasMoney){
            res.send("쿠폰 구매 완료");
        }
    }
}