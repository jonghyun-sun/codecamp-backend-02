import puppeteer from "puppeteer";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); //브라우저 시작// headless:false => 브라우저 보여주기 //하나하나 await 해줘야함
  const page = await browser.newPage(); //브라우저에서 새창 띄우기
  await page.setViewport({ width: 1280, height: 720 }); // 브라우저 사이즈
  await page.goto("https://www.goodchoice.kr/product/search/2"); //사이트로 이동 // copy-> copyselector로 원하는 정보 복사
  await page.waitForTimeout(1000); //차단을 피하기 위해 조금 텀을 두고 실행

  await browser.close(); //브라우저 종료해주기
}

startCrawling();
