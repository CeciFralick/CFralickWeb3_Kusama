import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);

gsap.set("#smbody",{transformOrigin: "50% 50%"})
gsap.set("#lense",{transformOrigin: "50% 50%"})

const mainTL = gsap.timeline();
// mainTL.from("tleft",{duration:0.25, scaleY:0, ease: "none)"},"-=20%")
  mainTL.from("tleft",{drawSVG:"10% 100%", ease:"none"})
mainTL.from("#smbody",{opacity:0, duration:1, y:"1000", rotate:-180})
mainTL.to("#smbody", {morphSVG:"#body",duration:.4})
mainTL.from("#smflash",{duration:1},"playSameTime")
mainTL.to("#smflash", {morphSVG:"#flash",duration:.4},"playSameTime")
mainTL.from("#lense",{scale:0},"same")
mainTL.to("#lense",{xPercent:40})
mainTL.to("#lense",{xPercent:0})
mainTL.from("#top",{yPercent:40, autoAlpha:0},"same")
mainTL.from("#bbase",{yPercent:40, autoAlpha:0},"same")
mainTL.from("#button",{yPercent:40, autoAlpha:0},"same")


;


// mainTL.add(fivedots())
// .add(layertwo())
// .add(layerthree())
// .add(layerfour())
// .add(layerfive())
// .add(layersix())
// .add(layerseven())
// // .add(layereight())
// .add(layernine(),"-=99%")
// .add(layerten())
// .add(layereleven())
// .add(layertwelve())
// .add(layerthirteen())
// .add(layerfourteen(),"playSameTime")
// .add(layerfifteen())
// .add(layerdots(),"playSameTime")
// .add(endseq())
// .add(heroanimations(),"-=25%")
// ;




GSDevTools.create();






// const aniTime = 0.5;

gsap.timeline()