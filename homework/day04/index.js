import express from "express"

const app = express()
app.use(express.json())


app.get('./user', (req,res) =>{
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


app.listen(3001)