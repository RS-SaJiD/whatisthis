const { chromium } = require('playwright');

(async () => {
  // ব্রাউজার লঞ্চ করা
  const browser = await chromium.launch();
  
  // Full HD রেজোলিউশন ও ভিডিও সেটিংস
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: './videos/',
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();
  
  // তোমার ওয়েবসাইটে যাওয়া এবং লোড হওয়া পর্যন্ত অপেক্ষা করা
  await page.goto('https://neophinix.988311.xyz/BluePhinix', { waitUntil: 'networkidle' }); 

  // স্ক্রোলিং লুপ (২০ সেকেন্ড ধরে আস্তে আস্তে নিচে নামবে)
  // প্রতি ৪০০ মিলিসেকেন্ডে ১০০ পিক্সেল করে স্ক্রোল হবে
  for (let i = 0; i < 50; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 100); // ১০০ পিক্সেল নিচে স্ক্রোল
    });
    await page.waitForTimeout(400); // ০.৪ সেকেন্ড অপেক্ষা
  }

  // ব্রাউজার বন্ধ করা (এর পর ভিডিও ফাইল তৈরি হবে)
  await browser.close();
  console.log("স্ক্রোলিং সহ রেকর্ডিং সফলভাবে সম্পন্ন হয়েছে!");
})();
