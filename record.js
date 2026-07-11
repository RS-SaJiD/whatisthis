const { chromium } = require('playwright');

(async () => {
  // ব্রাউজার লঞ্চ করা
  const browser = await chromium.launch();
  
  // HD রেজোলিউশন এবং ভিডিও সেভের ডিরেক্টরি সেট করা
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, // Full HD (অথবা 1280x720 দিতে পারো)
    recordVideo: {
      dir: './videos/', // যেখানে ভিডিও সেভ হবে
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();
  
  // তোমার টার্গেট ওয়েবসাইট
  await page.goto('https://example.com'); 

  // ২০ সেকেন্ড (২০,০০০ মিলিসেকেন্ড) অপেক্ষা করা রেকর্ডিংয়ের জন্য
  await page.waitForTimeout(20000); 

  // ব্রাউজার বন্ধ করলে ভিডিও ফাইলটি তৈরি হয়ে যাবে
  await browser.close();
  console.log("রেকর্ডিং সফলভাবে সম্পন্ন হয়েছে!");
})();
