import axios from 'axios'
import Cheerio from 'cheerio'

//스크래핑하는 함수
export async function creatBoardAPI(user){

    
    const aaa = await axios.get(user.prefer)///url가서 데이터 가져오기
    const $ = Cheerio.load(aaa.data)//문자열 싣기 ///$는 그냥 관례
    let og = {}
    $("meta").each(( _, el )=>{//메타 테크만 찾기//( 몇번째 메타 테그 인지 /테그 자체를 가지고 옴 )
        if($(el).attr("property")){

            const key = $(el).attr("property").split(":")[1]  //테그 중에 속성 값이 property 인 거 찾기=>"og:title" ====>title
            //url 빼고
            if(key !== "url"){
                const value = $(el).attr("content") //===>네이버  //og테크 있는 애들만 실행시켜줘
                og[key] = value

            }
        }
    })
    return og

}