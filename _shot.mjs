import { chromium } from 'playwright';
const SP=process.argv[2];
const b=await chromium.launch({channel:'chrome'});
async function shoot(path, name, opts){
  const ctx=await b.newContext({viewport:opts.vp, colorScheme:opts.scheme, deviceScaleFactor:2});
  const p=await ctx.newPage();
  await p.goto('http://localhost:4137'+path,{waitUntil:'networkidle'});
  await p.waitForTimeout(600);
  await p.screenshot({path:`${SP}/${name}.png`, fullPage:true});
  await ctx.close();
  console.log('shot',name);
}
await shoot('/prism','pv_prism_light_desktop',{vp:{width:1280,height:900},scheme:'light'});
await shoot('/prism','pv_prism_dark_desktop',{vp:{width:1280,height:900},scheme:'dark'});
await shoot('/prism','pv_prism_light_mobile',{vp:{width:390,height:844},scheme:'light'});
await shoot('/versassist','pv_versassist_light_desktop',{vp:{width:1280,height:900},scheme:'light'});
await shoot('/versassist','pv_versassist_dark_desktop',{vp:{width:1280,height:900},scheme:'dark'});
await shoot('/versassist','pv_versassist_light_mobile',{vp:{width:390,height:844},scheme:'light'});
await b.close();
