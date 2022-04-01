// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
   // 1. 입력한 휴대폰번호 가져오기
   const aa = document.getElementById("PhoneNumber01").value
   const bb = document.getElementById("PhoneNumber02").value
   const cc = document.getElementById("PhoneNumber03").value
   const ccc = aa + bb + cc
   console.log('나의핸드폰번호: ', ccc)

   // 2. 해당 휴대폰번호로 인증번호 요청하기
   await axios.post("http://localhost:3000/tokens/phone", {
       aaa: ccc
   })
}

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
  //여기도 위에 처럼 html에서 정보 받아 와야 한다
  await axios.post("http://localhost:3000/users", {
    user:{
      email:"jjong981028@gmail.com",
      name:"선종현",
      phone:"01083634418",
      site:"www.naver.com"
    }

})
}
