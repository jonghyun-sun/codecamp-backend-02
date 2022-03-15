function getToday (){
    const a = new Date()
    const yyyy = a.getFullYear()
    const mm = String(a.getMonth()+1).padStart(2,"0")
    const dd = String(a.getDate()).padStart(2,"0")
    const hh = String(a.getHours()).padStart(2,"0")
    const minute = String(a.getMinutes()).padStart(2,"0") 
    const second = String(a.getMilliseconds()).slice(0,2)
    console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${minute}:${second} 입니다`)
}

getToday()