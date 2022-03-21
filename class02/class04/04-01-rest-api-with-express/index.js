const { json } = require('express')
const express = require('express')
const app = express()
const port = 3001
import swaggerUi from 'express'
import swaggerDocument from './swagger.json'  
const express = require('express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
or if you are using Express router
app.use(express.json())
app.get('/boards', (req, res) => {
  //1.데이터를 조회하는 로직 => db에 접속헤서 데이터 꺼내오기
  const result = [
    { number:1,writter:"영희",contents:"영희 내용이에요~"},
    { number:2,writter:"철수",contents:"훈이내용이에요~"},
    { number:3,writter:"훈이",contents:"철수 내용이에요~"}

  ]
  //꺼내온 결과 응답 주기
  res.send(result)
})

app.post('/boards', (req, res) => {
  //1..데이터를 등록하는 로직 => db에 접속헤서 데이터 저장하기
  
  //2.저장 결과 알려주기!!
  console.log(req)
  res.send('등록에 성공하였습니다!')
})

app.post('/tokens/phone',(req,res) =>{

})
/*app.put('/boards/:id', (req, res) => {
  console.log(req)
  res.send('Hello World2!')
})

app.delete('/boards/:id', (req, res) => {
  console.log(req)
  res.send('Hello World2!')
})*/

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})