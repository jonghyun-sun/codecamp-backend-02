import express, { json } from "express"
import { checkValidationPhone, getToken, sendTokenToSMS } from './token.js'

const app = express()
const port = 3000

app.use(express.json()) // === json.parse  배열로된 데이터는 못읽으니까 객체로 바꿔준다 ,use는 적용하겠다는 뜻

app.get('/boards', (req, res) => {
  //1. 데이터 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number:1, writer:"철수", title:"제목입니다", contents:"내용이에요" },
    { number:1, writer:"영희", title:"영희 제목입니다", contents:"영희 내용이에요" },
    { number:1, writer:"훈이", title:"훈이 제목입니다", contents:"훈이 내용이에요" }
     //DB에서 꺼내왔다고 가정(꺼내오는거 아직 안배움)
  ]

  //2. 꺼내온 결과 응답 주기
  res.send(result)
})

app.post('/tokens/phone', (req,res) => {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  let myphone = req.body.myPhone
  console.log(req.body)
  const isValid = checkValidationPhone(myphone)
  if(isValid){
      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken()

      // 3. 핸드폰번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken)
      res.send("인증완료")
  }

})


// app.get('/boards/:id', (req, res) => {
//     cosole.log(req)       //어떤걸 요청했는지
//   res.send('Hello World!')
// })


// app.put('/boards', (req, res) => {
//   cosole.log(req)       //어떤걸 요청했는지
// res.send('Hello World!')
// })

// app.delete('/boards', (req, res) => {
//   cosole.log(req)       //어떤걸 요청했는지
// res.send('Hello World!')
// })


app.listen(port, () => {                              //3000에서 요청을 기다리는 중
    console.log(`Example app listening on port ${port}`)       // 한프로그램당 한 포트 => 포트는 겹치면 안됨
})



//전체를 서버프로그램이라고 함
//서버 프로그램이 켜있는 컴퓨터를 서버컴퓨터(서버)라고 함