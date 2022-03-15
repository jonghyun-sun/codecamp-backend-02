
//module 방식
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

/*commonjs 방식
const { checkValidationPhone} =require("./phone") */

console.log("안녕하세요~~")

function creatTokenOfPhone(myphone){

    //1.휴대폰 번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid){
        //2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken()
        //3.핸드폰에 토큰 전송
        sendTokenToSMS(myphone,mytoken)

    }
    
    
    
}

creatTokenOfPhone("010123456781111111111111")
