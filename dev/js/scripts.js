import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

const mainTL = gsap.timeline();

function fivedots(){
    const tl=gsap.timeline(); 
    tl.from("#c1",{opacity:1, duration:.5, x:"-1000"})
    tl.from("#c2",{opacity:1, duration:.5, x:"-1000"})
    tl.from("#c5",{opacity:1, duration:.5, x:"-1000"})
    tl.from("#c4",{opacity:1, duration:.5, x:"-1000"})
    tl.from("#c3",{opacity:1, duration:.5, x:"-1000"})
    tl.to("#c1", {opacity:0},"playSameTime")
    tl.to("#c2", {opacity:0},"playSameTime")
    tl.to("#c5", {opacity:0},"playSameTime")
    tl.to("#c4", {opacity:0},"playSameTime")
    tl.to("#c3", {opacity:0},"playSameTime");
    return tl;
}
function layertwo(){
    const tl=gsap.timeline();
    tl.from("#frame2",{opacity:0,duration:.5});
    return tl;
}
function layerthree(){
    const tl=gsap.timeline();
    tl.to("#frame2",{morphSVG:"#frame2",opacity:0},"playSameTime");
    tl.from("#frame3",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerfour(){
    const tl=gsap.timeline();
    tl.to("#frame3",{morphSVG:"#frame4",opacity:0},"playSameTime");
    tl.from("#frame4",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerfive(){
    const tl=gsap.timeline();
    tl.to("#frame4",{morphSVG:"#frame5",opacity:0},"playSameTime");
    tl.from("#frame5",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layersix(){
    const tl=gsap.timeline();
    tl.to("#frame5",{opacity:0},"playSameTime");
    tl.from("#frame6",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerseven(){
    const tl=gsap.timeline();
    tl.to("#frame6",{opacity:0},"playSameTime");
    tl.from("#frame7",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layereight(){
    const tl=gsap.timeline();
    tl.to("#frame7",{opacity:0},"playSameTime");
    tl.from("#frame8",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layernine(){
    const tl=gsap.timeline();
    tl.to("#frame8",{opacity:0},"playSameTime");
    tl.from("#frame9",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerten(){
    const tl=gsap.timeline();
    tl.from("#frame10",{opacity:0, duration:.5});
    return tl;
}
function layereleven(){
    const tl=gsap.timeline();
    tl.to("#frame10",{opacity:0},"playSameTime");
    tl.from("#frame11",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layertwelve(){
    const tl=gsap.timeline();
    tl.to("#frame11",{opacity:0},"playSameTime");
    tl.from("#frame12",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerthirteen(){
    const tl=gsap.timeline();
    tl.to("#frame12",{opacity:0},"playSameTime");
    tl.from("#frame13",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerfourteen(){
    const tl=gsap.timeline();
    tl.to("#frame13",{opacity:0},"playSameTime");
    tl.from("#frame14",{opacity:0, duration:.5},"playSameTime");
    return tl;
}
function layerdots(){
    const tl=gsap.timeline();
    tl.from("#Layer8",{opacity:0, duration:.5});
    return tl;
}
function layerfifteen(){
    const tl=gsap.timeline();
    tl.from("#frame15",{opacity:0, duration:.5});
    return tl;
}



mainTL.add(fivedots())
.add(layertwo())
.add(layerthree())
.add(layerfour())
.add(layerfive())
.add(layersix())
.add(layerseven())
.add(layereight())
.add(layernine())
.add(layerten())
.add(layereleven())
.add(layertwelve())
.add(layerthirteen())
.add(layerfourteen(),"playSameTime")
.add(layerfifteen())
.add(layerdots(),"playSameTime")

;




GSDevTools.create();
MorphSVGPlugin.create();






// const aniTime = 0.5;

// gsap.timeline()
// .from("#header img", {duration: 1, alpha:0, opacity:0, xPercent:-100})
// .from("#hero", {duration: 1, alpha:0, opacity:0, yPercent:100})
// .from("#hero h1", {opacity:0, xPercent:100, duration:0.9})
// .from("#flower", {opacity:0, xPercent:100, duration:0.5})
// // .from("#info #line", {opacity:0, yPercent:100, duration:0.5})
// .from("#info #sun", {opacity:0, duration: 2, xPercent:100, rotation: "+=360"}, "spin")
// .from("#info p", {opacity:0, yPercent:100, duration:0.5});