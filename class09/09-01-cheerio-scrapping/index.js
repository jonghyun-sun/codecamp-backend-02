import axios from "axios"
import cheerio from "cheerio"


async function creatBoardApi(mydata){
    const targeturl = mydata.contents.split(" ").filter((el) => el.startsWith("http"))[0]
    
    //
    const aaa = await axios.get(targeturl)
    const $ = cheerio.load(aaa.data)
    $("meta").each((_,el) => {
        if($(el).attr("property")){
            const key = $(el).attr('property').split(":")[1] //$는 관례적인 변수
            const value = $(el).attr('content')
            console.log(key,value)

        }
       
    }) //메타 태그를 다 찾아줘
}

const frontendData = {
    title:"안녕하세요",
    contents:"여기 정말 좋은 것 같아요! 놀러오세요.여기는 https://naver.com 이이요"
}
creatBoardApi(frontendData)