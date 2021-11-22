import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);

// gsap.set("#lense",{transformOrigin: "50% 50%"})
// gsap.set("#smflash",{transformOrigin: "50% 50%"})
// gsap.set("#tleft",{transformOrigin: "bottom left"})
// gsap.set("#tright",{transformOrigin: "top left"})

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

// {drawSVG: 0, ease:"none", duration:.2, stagger: 0.1}, "lsame")

function begins(){
    const tl=gsap.timeline();
    tl.from("#outer",{yPercent:40, autoAlpha:0, duration: 2, ease: "elastic.out(1, 0.2)"})
    tl.from("#mid",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.3)"},"-=99%")
    tl.from("#middle",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.3)"},"-=70%")
    // tl.from("#Hat",{drawSVG: 0, ease:"none", duration:.2, stagger: 0.1})
    tl.to("#mid", {morphSVG:"#HatBand",duration: .5, ease: "back.out(1.7)"})
    tl.to("#outer", {morphSVG:"#LeftSide",duration: .5, ease: "back.out(1)"})
    tl.to("#LeftSide", {morphSVG:"#RightSide",duration: .5, ease: "back.out(1)"},"-=50%")
    tl.to("#mid", {morphSVG:"#HatBand",duration: .5, ease: "back.out(1.7)"})
    tl.to("#middle",{morphSVG:"#LeftChunk",duration: .5, ease: "back.out(1)"})
    tl.to("#LeftChunk",{morphSVG:"#RightChunk",duration: .5, ease: "back.out(1)"})
    // tl.from("#Whte",{yPercent:40, autoAlpha:0,duration: 1.5, ease: "elastic.out(2.75, 0.4)"}, "same")
    // tl.to("#tleft",{drawSVG:0, ease:"none", duration:.4, stagger: 0.5},"ttime")
    // tl.to("#bleft",{drawSVG: 0 , ease:"none", duration:.4, stagger: 0.5}, "ttime")
    return tl;
}

function wholeface(){
    const tl=gsap.timeline();
    tl.from("#Face",{drawSVG: 0, ease:"none", duration:1, stagger: 0.1})
    tl.from("#Vector1", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Vector2", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Vector3", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Vector4", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Vector5", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Vector6", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#Left.Brow", {ease:"none", duration:2, stagger: 0.1})
    tl.from("#Right.Brow", {ease:"none", duration:2, stagger: 0.1})
    return tl;
}

function hairstuff(){
    const tl=gsap.timeline();
    tl.from("Left.Out",{duration:1, opacity: 1},"playSameTime")
    tl.from("Left.Mid",{duration:1, opacity: 1},"playSameTime")
    tl.from("Left.Cheek",{duration:1, opacity: 1},"playSameTime")
    tl.from("Left.Bang",{duration:1, opacity: 1},"playSameTime")
    return tl;
}

// function lenses(){
//     const tl=gsap.timeline();
//     tl.from("#lense",{scale:0, duration: .4})
//     tl.to("#lense",{xPercent:40, duration: .4})
//     tl.to("#lense",{xPercent:0, duration: .4})
//     return tl;
// }

// function cameratop(){
//     const tl=gsap.timeline();
//     tl.from("#top",{yPercent:40, autoAlpha:0, duration: 2, ease: "elastic.out(1.75, 0.2)"},"same")
//     tl.from("#bbase",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1.5, 0.3)"},"same")
//     tl.from("#button",{yPercent:40, autoAlpha:0,duration: 1.5, ease: "elastic.out(2.75, 0.4)"}, "same")
//     return tl;
// }



mainTL.add(begins())
.add(wholeface())
.add(hairstuff())
// .add(lenses(),"sameTime", "-=60%")
// .add(cameratop(),"sameTime")
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




GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();




// const aniTime = 0.5;





// ;
gsap.timeline()
