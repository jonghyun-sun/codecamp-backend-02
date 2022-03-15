
//이메일이 정상인지
function checkValidationEmail(email){
    let a
    if(email ===undefined){
        console.log("이메일을 입력해주세요!!!")
        return false;
    } else{
        a= email.includes("@")  // !email.includes("@")안포함하는 경우
        if(a===1){
            return true;
        } else{
            console.log("이메일 형식이 잘못 되었습니다!!!")
            return false;
        }
        }

}

//가입환영 템플릿
function getWelcomeTemplate({name,age,school,email,password}){
    return `
        <html>
            <body>
            <h1>${myname}님 가입을 환영합니다!!</h1>
            <hr />
            <div>이름: ${myname}</div>
            <div>나이: ${myage}살</div>
            <div>학교: ${myschool}</div>
            <div>${email}</div>
            <div>${password}</div>
            </body>
        </html>
    `

}

