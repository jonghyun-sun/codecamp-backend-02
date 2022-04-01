import express from 'express'

const app = express()

// GET 요청이 들어왔을 때
app.get('/', function (req, res) { 
  res.send('Hello World') // 응답 보내기
})
 
app.listen(3001) // 3001번 포트에서 실행