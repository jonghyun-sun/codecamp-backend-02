import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    cosole.log(req)       //어떤걸 요청했는지
  res.send('Hello World!')
})

app.listen(port, () => {                              //3000에서 요청을 기다리는 중
    console.log(`Example app listening on port ${port}`)       // 한프로그램당 한 포트 => 포트는 겹치면 안됨
})



//전체를 서버프로그램이라고 함
//서버 프로그램이 켜있는 컴퓨터를 서버컴퓨터(서버)라고 함