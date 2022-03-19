import express from 'express'

const app = express()

// GET 요청이 들어왔을 때
app.get('/boards', (req, res) => { 
  res.send("조회에 성공하였습니다") // 응답 보내기
})

app.post('/boa04',(req,res) => {
  res.send("등록에 성공하였습니다")
})
 
app.listen(3001) // 3001번 포트에서 실행