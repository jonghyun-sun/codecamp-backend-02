import express from 'express'

const app = express()

app.use(express.json)

// GET 요청이 들어왔을 때
app.get('/boards', (req, res) => { 

  res.send("조회에 성공하였습니다") // 응답 보내기
})

//post 요청이 들어왔을 때
app.post('/boa04',(req,res) => {
  res.send("등록에 성공하였습니다")
  console.log(req)
  console.log(req.body)
})
 
app.listen(3002) // 3002번 포트에서 실행