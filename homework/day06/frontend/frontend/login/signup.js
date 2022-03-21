// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
  const result = await axios.post(`https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`,//endpoint
  {//data
      body: `안녕하세요. 인증번호는 [${ggg}]입니다`,
      sendNo: sender,
      recipientList:[{internationalRecipientNo: fff}]

  },{//config(headers)
      headers:{
          "content-Type":'application/json;charset=UTF-8',
          "X-Secret-Key": XSecreteKey

      }
  })
  console.log(result)
  console.log("전송끝")



}

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
}
