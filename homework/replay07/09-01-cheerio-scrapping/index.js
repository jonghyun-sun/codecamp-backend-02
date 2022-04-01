import axios from "axios"
import  Cheerio from "cheerio"


async function creatBoardApiboardAPI(mydata){

    const targetURL = mydata.contents.split(" ").filter((el) => el.startsWith("http"))[0]

    const aaa = await axios.get(targetURL)///url가서 데이터 가져오기
    console.log(aaa.data) //문자열 데이터
    const $ = Cheerio.load(aaa.data)//문자열 싣기 ///$는 그냥 관례
    $("meta").each(( _, el )=>{//메타 테크만 찾기//( 몇번째 메타 테그 인지 /테그 자체를 가지고 옴 )
        if($(el).attr("property")){

            const key = $(el).attr("property").split(":")[1]  //테그 중에 속성 값이 property 인 거 찾기=>"og:title" ====>title
            const value = $(el).attr("content") //===>네이버  //og테크 있는 애들만 실행시켜줘
            console.log(key,value)
           
        }
})

}

const frontendData = {
    title:"안녕하세요",
    contents:"여기 정말 좋은 것 같아요 놀러오세요 여기는 https://naver.com 이에요",
}
creatBoardApiboardAPI(frontendData) 