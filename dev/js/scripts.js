import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);

gsap.set("#lense",{transformOrigin: "50% 50%"})
gsap.set("#smflash",{transformOrigin: "50% 50%"})
gsap.set("#tleft",{transformOrigin: "bottom left"})
gsap.set("#tright",{transformOrigin: "top left"})

const mainTL = gsap.timeline()

// mainTL.from("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
// .from("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "lsame")
// .from("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
// .from("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.2}, "lsame")
// .to("#tleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
// .to("#bleft",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
// .to("#bright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
// .to("#tright",{drawSVG: 0, ease:"none", duration:.5, stagger: 0.1}, "osame")
// .from("#smbody",{opacity:0, duration:1, y:"1000", rotate:-180})
// .to("#smbody", {morphSVG:"#body",duration: .5, ease: "back.out(1.7)"})
// .from("#smflash",{duration:0},"playSameTime")
// .to("#smflash", {morphSVG:"#flash",duration: .5, ease: "back.out(1.7)"}) 
// .from("#lense",{scale:0},"same")
// .to("#lense",{xPercent:40})
// .to("#lense",{xPercent:0})
// .from("#top",{yPercent:40, autoAlpha:0, duration: .5, ease: "back.out(1.7)"},"same")
// .from("#bbase",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.7)"},"same")
// .from("#button",{yPercent:40, autoAlpha:0,duration: .5, ease: "back.out(1.9)"},"same" )


function lines(){
    const tl=gsap.timeline();
    tl.from("#tleft",{alpha: 0, rotate:45, drawSVG: 0, ease:"none", duration:.4, stagger: 0.1}, "lsame")
    tl.from("#bleft",{alpha: 0,rotate:45,drawSVG: 0, ease:"none", duration:.4, stagger: 0.1}, "lsame")
    tl.from("#bright",{alpha: 0,rotate:45,drawSVG: 0, ease:"none", duration:.4, stagger: 0.2}, "lsame")
    tl.from("#tright",{alpha: 0,rotate:45,drawSVG: 0, ease:"none", duration:.4, stagger: 0.2}, "lsame")
    tl.to("#tleft",{alpha: 0,drawSVG:"0%",opacity:0,duration: .5, stagger: 0.1,stroke: "white"}, "osame")
    tl.to("#bleft",{alpha: 0,drawSVG:"0%", opacity:0,duration: .5,stagger: 0.1,stroke: "white"}, "osame")
    tl.to("#bright",{alpha: 0,drawSVG:"0%",opacity:0,duration: .5,stagger: 0.1,stroke: "white"}, "osame")
    tl.to("#tright",{alpha: 0,drawSVG:"0%",opacity:0,duration: .5, stagger: 0.1,stroke: "white"}, "osame")
    // tl.to("#tleft",{morphSVG:"#smtleft", duration: .5, ease: "back.out(1.7)"}, "tsame")
    // tl.to("#bleft",{morphSVG:"#smbleft", duration: .5, ease: "back.out(1.7)"}, "tsame")
    // tl.to("#bright",{morphSVG:"#smbright",duration: .5, ease: "back.out(1.7)"}, "tsame")
    // tl.to("#tright",{morphSVG:"#smtright",duration: .5, ease: "back.out(1.7)"}, "tsame")
    tl.to("#tleft",{display:"none"}, "otsame")
    tl.to("#bleft",{display:"none"}, "otsame")
    tl.to("#bright",{display:"none"}, "otsame")
    tl.to("#tright",{display:"none"}, "otsame")
    // tl.to("#tleft",{drawSVG:0, ease:"none", duration:.4, stagger: 0.5},"ttime")
    // tl.to("#bleft",{drawSVG: 0 , ease:"none", duration:.4, stagger: 0.5}, "ttime")
    return tl;
}


function cameraappears(){
    const tl=gsap.timeline();
    // tl.from("#lw",{yPercent:40, duration: .5, ease: "back.out(1.7)"})
    // tl.from("#rw",{yPercent:40, duration: .5, ease: "back.out(1.7)"})
    tl.from("#smbody",{opacity:0, duration:1, y:"1000", rotate:-180},"-=50%")
    tl.to("#smbody", {morphSVG:"#body",duration: .5, ease: "back.out(1.7)"})
    return tl;
}

function flashes(){
    const tl=gsap.timeline();
    tl.from("#smflash",{duration:0},"playSameTime")
    tl.to("#smflash", {morphSVG:"#flash",duration: .5, ease: "back.out(1.7)"}) 
    return tl;
}

function lenses(){
    const tl=gsap.timeline();
    tl.from("#lense",{scale:0, duration: .4})
    tl.to("#lense",{xPercent:40, duration: .4})
    tl.to("#lense",{xPercent:0, duration: .4})
    return tl;
}

function cameratop(){
    const tl=gsap.timeline();
    tl.from("#top",{yPercent:40, autoAlpha:0, duration: 2, ease: "elastic.out(1.75, 0.2)"},"same")
    tl.from("#bbase",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1.5, 0.3)"},"same")
    tl.from("#button",{yPercent:40, autoAlpha:0,duration: 1.5, ease: "elastic.out(2.75, 0.4)"}, "same")
    return tl;
}



mainTL.add(lines(),"same")
.add(cameraappears(),"same")
.add(flashes(),"-=60%")
.add(lenses(),"sameTime", "-=60%")
.add(cameratop(),"sameTime")
;

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




// GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();




// // const aniTime = 0.5;





// ;
// gsap.timeline()
