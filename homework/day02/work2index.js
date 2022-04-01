export function checkValidationEmail(email){
    if(email === undefined || !email.includes("@")){
        console.log("잘못된 이메일 형식입니다!!")
    } else{
        return true;
    }
}

export function checkValidationIdentnum(iden){
    if(iden === undefined || !iden.includes("-") || iden.length != 15){
        console.log("잘못된 주민번호 형식입니다!!")
    } else{
        return true;
    }
}

export function checkValidationPhone(phoneNum){
    if(phoneNum === undefined || phoneNum.length != 11){
        console.log("잘못된 핸드폰 번호 형식입니다!!")

    } else{
        return true;
    }
}

export function getwelcomeTemplate({email, identNum, phone, site}){
    return `
        <html>
            <body>
                <h1>선종현님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이메일: ${email}</div>
                <div>주민번호: ${identNum}</div>
                <div>핸드폰 번호: ${phone}</div>
                <div>좋아하는 사이트: ${site}</div>
            </body>
        </html>
    `


}