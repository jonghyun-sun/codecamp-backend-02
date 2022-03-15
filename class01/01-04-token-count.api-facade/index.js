console.log("안녕하세요~~")

function checkValidationPhone(myphone){
    if(myphone.length !==10 && myphone.length !==11){
        console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요")
        return false
    } else {
        return true
    }

}

function getToken(){
    const mycount = 6  

    if(mycount === undefined){
        console.log("에러 발생 갯수를 입력해주세요")
        return
    }
    
    else if(mycount < 0){
        console.log("에러 발생!! 갯수가 너무 적습니다!!!")
        return
    } else if(mycount > 10){
        console.log("에러발생!! 갯수가 너무 많습니다!!!")
        return
    }
    const result = String(Math.floor(Math.random() * 10**mycount)).padStart(mycount,"0")
    return result
    //console.log(result)

}

function sendTokenToSMS(myphone,mytoken){
    
    console.log(myphone + "번호로 인증번호" + mytoken + "를 전송합니다!")

}


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
