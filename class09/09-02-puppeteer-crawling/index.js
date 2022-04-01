import puppeteer from "puppeteer"

async function startCrawling(){
    const browser = await puppeteer.launch({ headless:false })
    const page = await browser.newPage()
    await page.setViewport({width:1280,height:720})
    await page.goto("https://www.goodchoice.kr/product/search/2")
    await page.waitForTimeout(1000)

    const stage = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
        (el) => el.textContent
    )
    await page.waitForTimeout(1000)
    '#poduct_list_area > li:nth-child(3) > a > div > div.name > strong'
    
    const location = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
        (el)=>el.textContent
    )
    await page.waitForTimeout(1000)

    const price = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
        (el)=>el.textContent
    )
    await page.waitForTimeout(1000)

    console.log(stage.trim())
    console.log(location.trim())
    console.log(price.trim())
    await browser.close()
    
}
startCrawling()