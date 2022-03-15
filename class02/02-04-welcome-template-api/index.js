import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js' 
function createUser(user){
    const a= user.email
    
    //1.이메일이 정상인지 확인(1-이메일 존재 여부,2."@"가 포함여부)
    const isValid = checkValidationEmail(a)
    if (isValid){
        const result = getWelcomeTemplate(myuser)

    }

    
    
    //2.가입환영 템플릿 만들기
 

    //3.이메일에 가입환영 템플릿 전송하기


}

const myuser = {
    name:"철수",
    age: 8,
    school: "다람쥐 초등학교",
    email: "a@a.com",
    password: "1234"
}
createUser(myuser)