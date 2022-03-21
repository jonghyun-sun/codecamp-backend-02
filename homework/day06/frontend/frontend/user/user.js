// 회원 목록 조회 API를 요청해주세요.
const getUser = () => {
  // 받은 데이터로 createUserDiv함수를 이용해
  // 목록 화면을 완성해주세요.
  axios.get('http://localhost:3000/users',{
  })
  .then((res) => {
    let result = res.data
    for( i = 0; result.length > i; i++)
    createUserDiv(result[i])
  })
    
    
    
  
  
  
}

const createUserDiv = (data) => {
  const userTableItem = document.createElement('div')
  userTableItem.className = 'User_Table_Item'

  const emailItem = document.createElement('div')
  emailItem.className = 'Item_Info'
  emailItem.textContent = data.email

  const personalItem = document.createElement('div')
  personalItem.className = 'Item_Info'
  personalItem.textContent = data.name

  const phoneItem = document.createElement('div')
  phoneItem.className = 'Item_Info'
  phoneItem.textContent = data.phone

  const preferItem = document.createElement('div')
  preferItem.className = 'Item_Info'
  preferItem.textContent = data.prefer

  const menuBack = document.querySelector('#User_Data_Wrapper')
  menuBack.appendChild(userTableItem)
  userTableItem.appendChild(emailItem)
  userTableItem.appendChild(personalItem)
  userTableItem.appendChild(phoneItem)
  userTableItem.appendChild(preferItem)
}
