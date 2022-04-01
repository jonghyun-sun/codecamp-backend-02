import puppeteer from "puppeteer";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); //브라우저 시작// headless:false => 브라우저 보여주기 //하나하나 await 해줘야함
  const page = await browser.newPage(); //브라우저에서 새창 띄우기
  await page.setViewport({ width: 1280, height: 720 }); // 브라우저 사이즈
  await page.goto("https://www.goodchoice.kr/product/search/2"); //사이트로 이동 // copy-> copyselector로 원하는 정보 복사
  await page.waitForTimeout(1000); //차단을 피하기 위해 조금 텀을 두고 실행

  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  ); //검증하겠다  //el => 셀렉터가 찾아온 태그
  //("#poduct_list_area > li:nth-child(4) > a > div > div.name > strong "); =>패턴이 있다

  await page.waitForTimeout(1000);
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  await page.waitForTimeout(1000);

  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );
  await page.waitForTimeout(1000);

  console.log(stage);
  console.log(location.trim());
  console.log(price);

  await browser.close(); //브라우저 종료해주기
}

startCrawling();
