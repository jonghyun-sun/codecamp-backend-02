import express from "express"

const app = express()

//상품 구매하기 
app.post("/products/buy",(req,res ) => {
    //1.가진돈을 검증하는 코드(대략 10줄)
    //...
    
    //2.판매 여부를 검증하는 코드(대략 10줄) 물건이있는지..
    //...

    //3.상품 구매하는 코드 
    //if(돈있음 && 판매중){
        res.send("상품 구매 완료")//구매 관련 처리했다고 가정
    //}
    
    
})

//상품 환불하기
app.post("/products/refund",(req,res ) => {
    //1.판매 여부를 검증하는 코드(대략 10줄 정도)샀는지..
    //...

    //2. 상품 환불하는 코드
    //if( !판매중 ){ 사갔다면..
        res.send("상품 환불 완료")//환불 관련 처리했다고 가정
    //}
    
})


app.listen(3000)