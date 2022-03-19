import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'



const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/user', (req,res) =>{
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
        { name: '흑당버블티', kcal: 50 },
        { name: '녹차', kcal: 5 }
        
    ]

    res.send(result)
})


app.listen(3001)