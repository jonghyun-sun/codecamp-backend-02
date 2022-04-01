import { CashService } from "./services/cash.service.js"
import { ProductService } from "./services/product.service.js"

export class ProductController {

    buyProduct = ()=>{
        //1.가진돈 검증하는 코드(10줄 -> 2줄)
        const cashService = new CashService()
        const hasMoney = cashService.checkValue()//true 또는 false 리턴

        //2.판매 여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()//true 또는 false 리턴한다고 가정


        //3.상품 구매하는 코드 
        if(hasMoney === true && !isSoldout === true){
            res.send("상품 구매 완료")//구매 관련 처리했다고 가정
        }

    }

    refundProduct = (req,res ) => {
        //1.판매 여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()//true 또는 false 리턴한다고 가정
    
        //2. 상품 환불하는 코드
        if( isSoldout ){ //사갔다면..
            res.send("상품 환불 완료")//환불 관련 처리했다고 가정
        }
        
    }

    

}
