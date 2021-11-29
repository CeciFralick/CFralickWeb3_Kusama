import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);

gsap.set("#Vector1",{transformOrigin: "top middle"})
gsap.set("#Vector2",{transformOrigin: "top middle"})
gsap.set("#Vector3",{transformOrigin: "top middle"})
gsap.set("#Vector4",{transformOrigin: "top middle"})
gsap.set("#Vector5",{transformOrigin: "top middle"})
gsap.set("#Vector6",{transformOrigin: "top middle"})

const mainTL = gsap.timeline()

// {drawSVG: 0, ease:"none", duration:.2, stagger: 0.1}, "lsame")

function begins(){
    const tl=gsap.timeline();
    tl.from("#outer",{yPercent:40, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.2)"})
    tl.from("#mid",{yPercent:40, autoAlpha:0,duration: 1, ease: "elastic.out(1, 0.3)"},"-=70%")
    tl.from("#middle",{yPercent:-40, autoAlpha:0, duration: 1, ease: "elastic.out(1, 0.3)"},"-=50%")
    // tl.from("#blueoutline", {drawSVG: 0, ease:"none", duration:1, stagger: 0.1})
    // tl.from("#Hat",{drawSVG: 0, ease:"none", duration:.2, stagger: 0.1})
    tl.to("#mid", {morphSVG:"#mid2",duration: .5, ease: "back.out(1.7)"},"-=70%")
    // tl.from("#Hat",{yPercent:40, autoAlpha:0, duration: 2, ease: "elastic.out(1, 0.2)"})
    tl.to("#outer", {morphSVG:"#outer2",duration: .5, ease: "back.out(1.7)"},"-=50%")
    // tl.to("#blueoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.to("#Whte",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.2)"},"-=70%")
    tl.to("#middle",{morphSVG:"#middle2",duration: .5, ease: "back.out(1)"},"-=80%")
    tl.to("#mid", {morphSVG:"#HatBand",duration: .5, ease: "back.out(1.7)"},"-=30%")
    tl.to("#mid2", {morphSVG:"#HatBand",duration: .5, ease: "back.out(1.7)"},"-=30%")
    tl.to("#outer", {morphSVG:"#LeftSide",duration: .5, ease: "back.out(1)"},"-=30%")
    tl.to("#LeftSide", {morphSVG:"#RightSide",duration: .5, ease: "back.out(1)"},"-=50%")
    // tl.to("#LeftSide", {morphSVG:"#RightSide",duration: .5, ease: "back.out(1)"},"-=50%")
    tl.to("#middle",{morphSVG:"#LeftChunk",duration: 1, ease: "back.out(1)"},"-=70%")
    tl.from("#RightChunk",{xPercent:-80, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.5)"},"-=30%")
    tl.to("#Whte4",{yPercent:40, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.3)"},"-=90%")

    // tl.to("#middle",{morphSVG:"#LeftChunk",duration: .5, ease: "back.out(1)"})
    // tl.from("#Whte",{yPercent:40, autoAlpha:0,duration: 1.5, ease: "elastic.out(2.75, 0.4)"}, "same")
    return tl;
}

function wholeface(){
    const tl=gsap.timeline();
    tl.from("#Face",{drawSVG: 0, ease:"none", duration:1, stagger: 0.1},"-=50%")
    tl.from("#Vector1", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=70%")
    tl.from("#Vector2", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=60%")
    tl.from("#Vector3", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#Vector4", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=40%")
    tl.from("#Vector5", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=30%")
    tl.from("#Vector6", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=20%")
    return tl;
}

function hairshadow(){
    const tl=gsap.timeline();
    tl.to("#middle",{morphSVG:"#LTop",duration: 1, ease: "back.out(1)"},"-=70%")
    tl.to("#RightChunk",{morphSVG:"#RTop",duration: 1, ease: "back.out(1)"},"-=90%")
    tl.from("#Left.Bang",{xPercent:-20, autoAlpha:0, duration:.5, ease: "elastic.out(1, 0.95)"},"same")
    tl.from("#Right.Bang",{xPercent:20, autoAlpha:0, duration:.5, ease: "elastic.out(1, 0.95)"},"same")
    tl.from("#LMid",{xPercent:-20, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.95)"},"-=90%")
    tl.from("#RMid",{xPercent:20, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.95)"},"-=90%")
    return tl;
}

function face(){
    const tl=gsap.timeline();
    tl.from("#MidTie", {yPercent:-80, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.5)"},"-=70%")
    tl.to("#MidTie",{morphSVG:"#2MidTie",duration: .5, ease: "back.out(1)"},"-=70%")
    tl.from("#rightbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.from("#leftbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#bowmidoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#leftbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#rightbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#righteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#lefteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#LeftTie", {xPercent:-80, autoAlpha:0, duration: 1, ease: "elastic.out(1, 0.7)"},"-=70%")
    tl.from("#RightTie", {xPercent:80, autoAlpha:0, duration: 1, ease: "elastic.out(1, 0.7)"},"-=70%")
    // tl.to("#Whte3",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.3)"})
    return tl;
}

function outlineb(){
    const tl=gsap.timeline();
    tl.to("#Whte3",{yPercent:70, autoAlpha:0,duration: 1, ease: "none"},"-=50%")
    return tl;
}
function outlinea(){
    const tl=gsap.timeline();
    tl.to("#rightbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#leftbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#bowmidoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#leftbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#rightbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#righteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#lefteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    return tl;
}

function hairtrans(){
    const tl=gsap.timeline();
    tl.to("#middle", {morphSVG:"#Left.Out",duration: .5, ease: "none"},"-=30%")
    tl.to("#RightChunk",{morphSVG:"#Right.Out",duration: .5, ease: "none"},"-=50%")
    return tl;
}

function blink(){
    const tl=gsap.timeline();
    // tl.from("#Right.Eye", {morphSVG:"#Right.Blink",duration: .5, ease: "back.out(1.7)"})
    tl.to("#Right.Eye", {morphSVG:{shape: "#Right.Blink", shapeIndex: 3, duration: 2}})
    return tl;
}

// function outlines(){
//     const tl=gsap.timeline();
//     tl.from("#Right.Brow", {duration: .5, stagger: 0.1},"-=50%")
//     tl.from("#Left.Brow", {duration: .5, stagger: 0.1},"-=50%")
//     tl.from("#Right.Eye", {duration: .5, stagger: 0.1},"-=50%")
//     tl.from("#Left.Eye", {duration: .5, stagger: 0.1},"-=50%")

    // tl.from("#rightbrowline", {morphSVG:"#Right.Brow",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#leftbrowline", {morphSVG:"#Left.Brow",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#bowmidoutline", {morphSVG:"#MidTie",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#leftbowoutline", {morphSVG:"#LeftTie",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#rightbowoutline", {morphSVG:"#RightTie",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#righteyeline", {morphSVG:"#Right.Eye",duration: .5, stagger: 0.1},"-=50%")
    // tl.from("#lefteyeline", {morphSVG:"#Left.Eye",duration: .5, stagger: 0.1},"-=50%")
//     return tl;
// }

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
.add(wholeface(),"-=20%")
.add(hairshadow())
.add(face(),"-=70%")
.add(outlineb())
.add(outlinea(),"-=90%")
.add(hairtrans())
.add(blink())
// .add(reveals())
// .add(outlines())
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
