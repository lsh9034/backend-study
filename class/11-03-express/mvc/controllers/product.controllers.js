import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class PorductController{
    buyproduct = (req, res)=>{
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();
    
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout;
    
        if(hasMoney && !isSOldout){
            res.send("삼품 구매 완료")
        }
    }

    refundProduct = (req, res)=>{
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();
    
        if(isSOldout){
            res.send("상품 환불 완료")
        }
    }
}