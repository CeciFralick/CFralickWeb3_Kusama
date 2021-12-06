import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin);

gsap.set("#Vector1",{transformOrigin: "top middle"})
gsap.set("#Vector2",{transformOrigin: "top middle"})
gsap.set("#Vector3",{transformOrigin: "top middle"})
gsap.set("#Vector4",{transformOrigin: "top middle"})
gsap.set("#Vector5",{transformOrigin: "top middle"})
gsap.set("#Vector6",{transformOrigin: "top middle"})

const mainTL = gsap.timeline()
mainTL.timeScale( 1.4 );

// {drawSVG: 0, ease:"none", duration:.2, stagger: 0.1}, "lsame")

function begins(){
    const tl=gsap.timeline();
    tl.from("#outer",{yPercent:40, duration: 1, ease: "elastic.out(1, 0.5)"})
    tl.from("#mid",{yPercent:40, autoAlpha:0,duration: .75, ease: "elastic.out(1, 0.5)"},"-=70%")
    tl.from("#middle",{yPercent:-40, autoAlpha:0, duration: .5, ease: "elastic.out(1, 0.5)"},"-=50%")
    // tl.from("#blueoutline", {drawSVG: 0, ease:"none", duration:1, stagger: 0.1})
    // tl.from("#Hat",{drawSVG: 0, ease:"none", duration:.2, stagger: 0.1})
    tl.to("#mid", {morphSVG:"#mid2",duration: .25, ease: "back.out(1.7)"},"-=70%")
    // tl.from("#Hat",{yPercent:40, autoAlpha:0, duration: 2, ease: "elastic.out(1, 0.2)"})
    tl.to("#outer", {morphSVG:"#outer2",duration: .35, ease: "back.out(1.7)"},"-=70%")
    // tl.to("#blueoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1})
    tl.to("#Whte",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.2)"},"-=70%")
    tl.to("#middle",{morphSVG:"#middle2",duration: .35, ease: "back.out(1)"},"-=80%")
    tl.to("#mid", {morphSVG:"#HatBand",duration: .35, ease: "back.out(1.7)"},"-=30%")
    tl.to("#mid2", {morphSVG:"#HatBand",duration: .35, ease: "back.out(1.7)"},"-=30%")
    tl.to("#outer", {morphSVG:"#LeftSide",duration: .35, ease: "back.out(1)"},"-=30%")
    tl.to("#LeftSide", {morphSVG:"#RightSide",duration: .35, ease: "back.out(1)"},"-=50%")
    // tl.to("#LeftSide", {morphSVG:"#RightSide",duration: .5, ease: "back.out(1)"},"-=50%")
    tl.to("#middle",{morphSVG:"#LeftChunk",duration: 1, ease: "back.out(1)"},"-=70%")
    tl.from("#RightChunk",{xPercent:-80, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.5)"},"-=50%")
    tl.to("#Whte4",{yPercent:40, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.3)"},"-=90%")

    // tl.to("#middle",{morphSVG:"#LeftChunk",duration: .5, ease: "back.out(1)"})
    // tl.from("#Whte",{yPercent:40, autoAlpha:0,duration: 1.5, ease: "elastic.out(2.75, 0.4)"}, "same")
    return tl;
}

function wholeface(){
    const tl=gsap.timeline();
    tl.from("#Face",{drawSVG: 0, ease:"none", duration:.75, stagger: 0.1},"-=60%", "same")
    tl.from("#MidTie", {yPercent:-80, autoAlpha:0, duration: .5, ease: "elastic.out(1, 0.5)"},"-=10%")
    tl.to("#MidTie",{morphSVG:"#MidTiea", duration: .5, ease: "back.out(1)"},"-=30%")
    return tl;
}
function hairlines(){
    const tl=gsap.timeline();
    tl.from("#Vector1", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=90%", "same")
    tl.from("#Vector2", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=80%")
    tl.from("#Vector3", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=70%")
    tl.from("#Vector4", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=70%")
    tl.from("#Vector5", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=60%")
    tl.from("#Vector6", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    return tl;
}

function hairshadow(){
    const tl=gsap.timeline();
    tl.to("#middle",{morphSVG:"#LTop",duration: 1, ease: "back.out(1)"},"-=70%")
    tl.to("#RightChunk",{morphSVG:"#RTop",duration: 1, ease: "back.out(1)"},"-=90%")
    tl.from("#LMid",{xPercent:-20, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.95)"},"-=90%")
    tl.from("#RMid",{xPercent:20, autoAlpha:0, duration: 1.5, ease: "elastic.out(1, 0.95)"},"-=90%")
    tl.from("#Left.Bang",{xPercent:-20, autoAlpha:0, duration:.5, ease: "elastic.out(1, 0.95)"},"same")
    tl.from("#Right.Bang",{xPercent:20, autoAlpha:0, duration:.5, ease: "elastic.out(1, 0.95)"},"same")
    return tl;
}

function face(){
    const tl=gsap.timeline();
    tl.from("#rightbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=90%")
    tl.from("#leftbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#bowmidoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#leftbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#rightbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#righteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=60%")
    tl.from("#lefteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"-=50%")
    tl.from("#LeftTie", {xPercent:-80, autoAlpha:0, duration: .75, ease: "elastic.out(1, 0.7)"},"-=70%")
    tl.from("#RightTie", {xPercent:80, autoAlpha:0, duration: .75, ease: "elastic.out(1, 0.7)"},"-=70%")
    // tl.to("#Whte3",{yPercent:40, autoAlpha:0,duration: 2, ease: "elastic.out(1, 0.3)"})
    return tl;
}

function outlineb(){
    const tl=gsap.timeline();
    tl.from("#Right.Eye",{yPercent:40, autoAlpha:0, duration: .5, ease: "elastic.out(1, 0.5)"})
    tl.to("#Whte3",{yPercent:70, duration: .5, ease: "none"},"-=80%")
    return tl;
}
function outlinea(){
    const tl=gsap.timeline();
    tl.to("#rightbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#leftbrowline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#bowmidoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#leftbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.1},"samep")
    tl.to("#rightbowoutline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.5},"samep")
    tl.to("#righteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.5},"samep")
    tl.to("#lefteyeline", {drawSVG: 0, ease:"none", duration:.5, stagger: 0.5},"samep")
    return tl;
}


function blinks(){
    const tl=gsap.timeline();
    tl.from("#blinkhelp",{yPercent:-20, autoAlpha:0, duration: .7, ease: "elastic.out(1, 0.95)"})
    tl.from("#RBlink",{yPercent:-20, autoAlpha:0, duration: 1, ease: "elastic.out(1, 0.4)"},"-=50%", "samet")
    tl.to("#RBlink",{morphSVG:"#ROpen",duration: .5, ease: "back.out(1)"})
    return tl;
}

function headtilt(){
    const tl=gsap.timeline();
    tl.to("#mbatter", {duration: .7, xPercent:10 , rotation: "+=10"})
    tl.to("#mbatter", {duration: .7, xPercent:0 , rotation: "+=-10"})
    return tl;
}

function starwink(){
    const tl=gsap.timeline();
    tl.from("#star", {scale: 1, duration: 1, autoAlpha:0})
    tl.to("#star", {duration: 1.5, motionPath:{path:"#starpath", align: "#starpath", autoRotate: 360}},"-=50%")
    return tl;
}



mainTL.add(begins())
.add(wholeface(),"-=50%")
.add(hairlines(),"-=90%")
.add(hairshadow())
.add(face(),"-=85%")
.add(outlineb(),"-=20%")
.add(outlinea(),"-=50%")
.add(blinks(),"same")
.add(starwink(),"same")
.add(headtilt(),"same")
// .add(reveals())
// .add(outlines())
;





GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();
MotionPathPlugin.create();



// const aniTime = 0.5;





// ;
gsap.timeline()
