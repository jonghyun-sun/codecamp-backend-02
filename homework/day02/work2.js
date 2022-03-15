import{ checkValidationEmail, checkValidationIdentnum, checkValidationPhone, getwelcomeTemplate } from '../day02/work2index.js'


function welcomeTemplate(identify){
    //email, identnum, phone  존재,형식확인
    let isValid1 = checkValidationEmail(identify.email)
    let isValid2 = checkValidationIdentnum(identify.identNum)
    let isValid3 = checkValidationPhone(identify.phone)
    if (isValid1 === true && isValid2 === true && isValid3 === true){
        //가입 환영 템플릿
        let mytemplate =  getwelcomeTemplate(identify)
        console.log(mytemplate)


    }

}





let ident = {
    email: "abc@ab.com",
    identNum: "981028-12345678",
    phone:"01012345678",
    site:"https://classroom.google.com/u/0/c/NDc0NjI2NDM3Njgx/a/NDc2NTcwNzQyNjM0/details"
}

welcomeTemplate(ident)