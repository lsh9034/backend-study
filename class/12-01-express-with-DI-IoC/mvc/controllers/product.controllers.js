import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class PorductController{
    constructor(moneyService, productService){
        this.moneyService = moneyService;
        this.productService = productService
    }

    buyproduct = (req, res)=>{
        //const cashService = new CashService();
        const hasMoney = this.moneyService.checkValue();
    
        //const productService = new ProductService();
        const isSoldout = this.productService.checkSoldout();
    
        if(hasMoney && !isSoldout){
            res.send("삼품 구매 완료")
        }
    }

    refundProduct = (req, res)=>{
        //const productService = new ProductService();
        const isSoldout = this.productService.checkSoldout();
    
        if(isSoldout){
            res.send("상품 환불 완료")
        }
    }
}