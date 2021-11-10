import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

gsap.set("#Vector_218",{transformOrigin: "50% 50%"})

const mainTL = gsap.timeline();

function fivedots(){
    const tl=gsap.timeline(); 
    tl.from("#c1",{opacity:0, duration:.5, x:"-1000"})
    tl.from("#c2",{opacity:0, duration:.5, x:"-1000"})
    tl.from("#c5",{opacity:0, duration:.5, x:"-1000"})
    tl.from("#c4",{opacity:0, duration:.5, x:"-1000"})
    tl.from("#c3",{opacity:0, duration:.5, x:"-1000"})
    return tl;
}
function layertwo(){
    const tl=gsap.timeline();
    tl.to("#c1", {morphSVG:"#ce1",duration:.4},"playSameTime")
    tl.to("#c2", {morphSVG:"#cb1",duration:.4},"playSameTime")
    tl.to("#c5", {morphSVG:"#ca1",duration:.4},"playSameTime")
    tl.to("#c4", {morphSVG:"#cc1",duration:.4},"playSameTime")
    tl.to("#c3", {morphSVG:"#cd1",duration:.4},"playSameTime");
    // tl.from("#ce1",{duration:.2},"playSameTime")
    // tl.from("#cb1",{duration:.2},"playSameTime")
    // tl.from("#ca1",{duration:.2},"playSameTime")
    // tl.from("#cc1",{duration:.2},"playSameTime")
    // tl.from("#cd1",{duration:.2},"playSameTime")
    // tl.from("#frame2",{opacity:0,duration:.1});
    return tl;
}
function layerthree(){
    const tl=gsap.timeline();
    // tl.to("#frame2",{morphSVG:"#frame3",opacity:0},"playSameTime");
    // tl.from("#frame2",{visibility:0},"vanish");
    // tl.to("#ca1",{opacity:0},"playSameTime");
    // tl.to("#cb1",{opacity:0},"playSameTime");
    // tl.to("#cc1",{opacity:0},"playSameTime");
    // tl.to("#cd1",{opacity:0},"playSameTime");
    // tl.to("#ce1",{opacity:0},"playSameTime");
    tl.to("#c1",{morphSVG:"#ce2",duration:.4},"playSameTime")
    tl.to("#c2",{morphSVG:"#cb2",duration:.4},"playSameTime")
    tl.to("#c3",{morphSVG:"#cd2",duration:.4},"playSameTime")
    tl.to("#c4",{morphSVG:"#cc2",duration:.4},"playSameTime")
    tl.to("#c5",{morphSVG:"#ca2",duration:.4},"playSameTime");
    // tl.from("#ce2",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cb2",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#ca2",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cc2",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cd2",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#frame3",{opacity:0,duration:.1});
    return tl;
}
function layerfour(){
    const tl=gsap.timeline();
    // tl.to("#frame3",{morphSVG:"#frame4",opacity:0},"playSameTime");
    // tl.from("#frame3",{visibility:0});
    tl.to("#c1",{morphSVG:"#cb3",duration:.4},"playSameTime")
    tl.to("#c2",{morphSVG:"#cb3",duration:.4},"playSameTime")
    tl.to("#c3",{morphSVG:"#cd3",duration:.4},"playSameTime")
    tl.to("#c4",{morphSVG:"#cc3",duration:.4},"playSameTime")
    tl.to("#c5",{morphSVG:"#ca3",duration:.4},"playSameTime");
    // tl.from("#ce3",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cb3",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#ca3",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cc3",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cd3",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#frame4",{opacity:0,duration:.1});
    return tl;
}
function layerfive(){
    const tl=gsap.timeline();
    // tl.to("#frame4",{morphSVG:"#frame5",opacity:0},"playSameTime");
    // tl.from("#frame4",{visibility:0});
    tl.to("#c1",{morphSVG:"#cc4",duration:.4},"playSameTime");
    tl.to("#c2",{morphSVG:"#cb4",duration:.4},"playSameTime");
    tl.to("#c3",{morphSVG:"#cd4",duration:.4},"playSameTime");
    tl.to("#c4",{morphSVG:"#ca4",duration:.4},"playSameTime");
    tl.to("#c5",{morphSVG:"#cb4",duration:.4},"playSameTime");
    // tl.from("#ce4",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cb4",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#ca4",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cc4",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cd4",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#frame5",{opacity:0,duration:.1});
    return tl;
}
function layersix(){
    const tl=gsap.timeline();
    // tl.to("#frame5",{opacity:0},"playSameTime");
    tl.to("#c1",{morphSVG:"#cc5",duration:.4},"playSameTime")
    tl.to("#c2",{morphSVG:"#cb5",duration:.4},"playSameTime")
    tl.to("#c3",{morphSVG:"#cd5",duration:.4},"playSameTime")
    tl.to("#c4",{morphSVG:"#ca5",duration:.4},"playSameTime")
    tl.to("#c5",{morphSVG:"#cb5",duration:.4},"playSameTime")
    tl.from("#st1",{opacity:0,duration:.4},"playSameTime");
    // tl.from("#ce5",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cb5",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#ca5",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cc5",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cd5",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#frame6",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerseven(){
    const tl=gsap.timeline();
    // tl.to("#frame6",{opacity:0},"playSameTime");

    tl.to("#c1",{morphSVG:"#cc6",duration:.4,autoAlpha:0},"playSameTime")
    tl.to("#c2",{morphSVG:"#cb6",duration:.4,autoAlpha:0},"playSameTime")
    tl.to("#c3",{morphSVG:"#cd6",duration:.4,autoAlpha:0},"playSameTime")
    tl.to("#c4",{morphSVG:"#ca6",duration:.4,autoAlpha:0},"playSameTime")
    tl.to("#c5",{morphSVG:"#cb6",duration:.4,autoAlpha:0},"playSameTime");

    // tl.from("#ce6",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cb6",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#ca6",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cc6",{opacity:0,duration:.2},"playSameTime")
    // tl.from("#cd6",{opacity:0,duration:.2},"playSameTime")
    // tl.to("#frame7",{opacity:0});
    return tl;
}
// function layereight(){
//     const tl=gsap.timeline();
//     // tl.to("#st1",{morphSVG:"#st2",duration:.2},"playSameTime");
//     // tl.to("#c1",{morphSVG:"#cb7",duration:.2},"playSameTime");
//     // tl.to("#c2",{morphSVG:"#cd7",duration:.2},"playSameTime");
//     // tl.to("#c3",{morphSVG:"#ca7",duration:.2},"playSameTime");
//     // tl.to("#c4",{morphSVG:"#cc7",duration:.2},"playSameTime");
//     // tl.to("#c5",{morphSVG:"#ce7",duration:.2},"playSameTime");
//     // // tl.from("#frame8",{autoAlpha:0, duration:.2},"playSameTime");
//     tl.to("#c1",{opacity:0},"playSameTime")
//     tl.to("#c2",{opacity:0},"playSameTime")
//     tl.to("#c3",{opacity:0},"playSameTime")
//     tl.to("#c4",{opacity:0},"playSameTime")
//     tl.to("#c5",{opacity:0},"playSameTime");
//     return tl;
// }
function layernine(){
    const tl=gsap.timeline();
    // tl.to("#frame8",{opacity:0, duration:.2},"playSameTime");
    tl.from("#frame9",{autoAlpha:0, duration:.2},"playSameTime");
    return tl;
}
function layerten(){
    const tl=gsap.timeline();
    tl.from("#frame10",{autoAlpha:0, duration:.2});
    return tl;
}
function layereleven(){
    const tl=gsap.timeline();
    tl.to("#frame10",{opacity:0, duration:.5},"playSameTime");
    tl.from("#frame11",{autoAlpha:0, duration:.5},"playSameTime");
    return tl;
}
function layertwelve(){
    const tl=gsap.timeline();
    // tl.to("#frame11",{opacity:0, duration:.5},"playSameTime");
    tl.from("#frame12",{autoAlpha:0, duration:.5},"playSameTime");
    return tl;
}
function layerthirteen(){
    const tl=gsap.timeline();
    // tl.to("#frame12",{opacity:0, duration:.5},"playSameTime");
    tl.from("#frame13",{autoAlpha:0, duration:.5},"playSameTime");
    return tl;
}
function layerfourteen(){
    const tl=gsap.timeline();
    // tl.to("#frame13",{opacity:0, duration:.5},"playSameTime");
    tl.from("#frame14",{autoAlpha:0, duration:.5},"playSameTime");
    return tl;
}
function layerdots(){
    const tl=gsap.timeline();
    tl.from("#Layer8",{autoAlpha:0, duration:.5});
    return tl;
}
function layerfifteen(){
    const tl=gsap.timeline();
    tl.from("#frame15",{autoAlpha:0, duration:.5});
    return tl;
}
function endseq(){
    const tl=gsap.timeline();
    tl.to("#frame10",{alpha:0, duration:.5})
    tl.to("#Vector_218",{scale:100, duration:1.5})
    .to("#preloader",{duration:0.25, alpha:0, onComplete:backToTop})
    // tl.to("#Vector_218",{scaleY:150});
    return tl;
}

function backToTop(){
    window.scrollTo(0,0);
    gsap.set("#preloader",{display:"none"});
}

function heroanimations(){
    const tl=gsap.timeline();
    tl.from("#header img", {duration: .5, alpha:0, opacity:0, xPercent:-100})
    .from("#hero", {duration: 1, alpha:0, opacity:0, yPercent:100})
    .from("#hero h1", {opacity:0, xPercent:100, duration:0.9})
    .from("#flower", {opacity:0, xPercent:100, duration:0.5})
    // .from("#info #line", {opacity:0, yPercent:100, duration:0.5})
    .from("#info #sun", {opacity:0, duration: 2, xPercent:100, rotation: "+=360"}, "spin")
    .from("#info p", {opacity:0, yPercent:100, duration:0.5});
    return tl;
}



mainTL.add(fivedots())
.add(layertwo())
.add(layerthree())
.add(layerfour())
.add(layerfive())
.add(layersix())
.add(layerseven())
// .add(layereight())
.add(layernine(),"-=99%")
.add(layerten())
.add(layereleven())
.add(layertwelve())
.add(layerthirteen())
.add(layerfourteen(),"playSameTime")
.add(layerfifteen())
.add(layerdots(),"playSameTime")
.add(endseq())
.add(heroanimations(),"-=25%")
;




GSDevTools.create();






// const aniTime = 0.5;

// gsap.timeline()