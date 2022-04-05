import puppeteer from "puppeteer";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); //브라우저 시작// headless:false => 브라우저 보여주기 //하나하나 await 해줘야함
  const page = await browser.newPage(); //브라우저에서 새창 띄우기
  await page.setViewport({ width: 1280, height: 720 }); // 브라우저 사이즈
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); //사이트로 이동 // copy-> copyselector로 원하는 정보 복사
  await page.waitForTimeout(1000); //차단을 피하기 위해 조금 텀을 두고 실행
  const framePage = await page.frames()/*iframe 목록 뽑아오기*/.find(el => el.url().includes("/item/sise_time.naver?code=005930"))//이 url을 포함한 iframe값 가져오기


  for(let i = 3; i <= 7; i++ ){//목록 뽑아오기
    await page.waitForTimeout(1000)
    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,//iframe 안에 들어가서 찾아야 오류 안나옴
      (el) => el.textContent
    )
    const date = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
      (el) => el.textContent
    )
    console.log(date,price)

  }
  
  await browser.close(); //브라우저 종료해주기
}

startCrawling();
