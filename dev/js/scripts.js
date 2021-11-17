import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);

gsap.set("#smbody",{transformOrigin: "50% 50%"})
gsap.set("#lense",{transformOrigin: "50% 50%"})
gsap.set("#tleft",{transformOrigin: "bottom left"})
gsap.set("#tright",{transformOrigin: "top left"})

const mainTL = gsap.timeline()

mainTL.from("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
.from("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
.from("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
.from("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
.to("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
.to("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
.to("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
.to("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
.from("#smbody",{opacity:0, duration:1, y:"1000", rotate:-180})
.to("#smbody", {morphSVG:"#body",duration: .5, ease: "back.out(1.7)"})
.from("#smflash",{duration:0},"playSameTime")
.to("#smflash", {morphSVG:"#flash",duration: .5, ease: "back.out(1.7)"}) 
.from("#lense",{scale:0},"same")
.to("#lense",{xPercent:40})
.to("#lense",{xPercent:0})
.from("#top",{yPercent:40, autoAlpha:0, duration: .5, ease: "back.out(1.7)"},"same")
.from("#bbase",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.7)"},"same")
.from("#button",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.9)"},"same" )


// function lines(){
//     const tl=gsap.timeline();
//     tl.from("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
//     tl.from("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
//     tl.from("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
//     tl.from("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
//     tl.to("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
//     tl.to("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
//     tl.to("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
//     tl.to("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
//     return tl;
// }

// function cameraappears(){
//     const tl=gsap.timeline();
//     tl.from("#smbody",{opacity:0, duration:1, y:"1000", rotate:-180})
//     tl.to("#smbody", {morphSVG:"#body",duration: .5, ease: "back.out(1.7)"})
//     tl.from("#smflash",{duration:0},"playSameTime")
//     tl.to("#smflash", {morphSVG:"#flash",duration: .5, ease: "back.out(1.7)"}) 
//     return tl;
// }


// function cameraextras(){
//     const tl=gsap.timeline();
//     tl.from("#lense",{scale:0},"same")
//     tl.to("#lense",{xPercent:40})
//     tl.to("#lense",{xPercent:0})
//     tl.from("#top",{yPercent:40, autoAlpha:0, duration: .5, ease: "back.out(1.7)"},"same")
//     tl.from("#bbase",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.7)"},"same")
//     tl.from("#button",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.9)"},"same" )
//     return tl;
// }




// // mainTL.add(fivedots())
// // .add(layertwo())
// // .add(layerthree())
// // .add(layerfour())
// // .add(layerfive())
// // .add(layersix())
// // .add(layerseven())
// // // .add(layereight())
// // .add(layernine(),"-=99%")
// // .add(layerten())
// // .add(layereleven())
// // .add(layertwelve())
// // .add(layerthirteen())
// // .add(layerfourteen(),"playSameTime")
// // .add(layerfifteen())
// // .add(layerdots(),"playSameTime")
// // .add(endseq())
// // .add(heroanimations(),"-=25%")
// // ;




GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();




// // const aniTime = 0.5;

// mainTL.add(lines())
// .add(cameraappears())
// .add(cameraextras())




// ;
// gsap.timeline()
