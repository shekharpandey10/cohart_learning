import puppeteer from 'puppeteer'
// taking the screenshorts

(async()=>{
    try{
        const browser=await puppeteer.launch({haadless:false})
        const page=await browser.newPage()
        await page.goto('https://google.com/')
        await page.screenshot({path:'google.png'})
        await browser.close()
    }catch(err){
        console.error(err)
    }
})();