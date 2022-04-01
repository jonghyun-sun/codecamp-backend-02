import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

import dotenv from 'dotenv'
dotenv.config() //env 사용위한 명령어 

import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'





const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req,res) =>{
    //데이터 조회
    const result=[
        { email:"qwe@@@gmail.com", name:"철수", phone:"01012345678", personal:"220110-222212", prefer:"www.naver.com"},
        { email:"wer@@@gmail.com", name:"영희", phone:"01098989012", personal:"150110-212322", prefer:"www.daum.com"},
        { email:"ert@@@gmail.com", name:"훈이", phone:"01012456778", personal:"210110-224622", prefer:"www.web.com"},
        { email:"rrt@@@gmail.com", name:"짱구", phone:"01012543678", personal:"220220-227722", prefer:"www.toon.com"},
        { email:"yui@@@gmail.com", name:"유리", phone:"01016456378", personal:"220440-228822", prefer:"www.school.com"}
    ]

    res.send(result)
})


 app.get('/starbucks', (req,res) =>{
    //데이터 조회
    const result=[
        { name: '아메리카노', kcal: 5 },
        { name: '자몽에이드', kcal: 100 },
        { name: '레몬에이드', kcal: 50 },
        { name: '수정과', kcal: 20 },
        { name: '식혜', kcal: 30 },
        { name: '프라프치노', kcal: 5 },
        { name: '버블티', kcal: 100 },
        { name: '흑당버블티', kcal: 50 }
        
    ]

    res.send(result)
})

app.post('/tokens/phone', (req, res) => {
    const myphone = req.body.aaa
  
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken()
  
        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)
        res.send("인증완료!!")
    }
  })


app.listen(3000)