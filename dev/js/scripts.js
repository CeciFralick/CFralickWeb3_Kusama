import { gsap } from "gsap";

const mainTL = gsap.timeline();

// from = start point of timeline
// mainTL.from("#hero article",{duration:2,alpha:0, scale:2});

// to = end point of timeline
// mainTL.to("#hero article",{duration:2,alpha:0, scale:2});


const aniTime = 0.5;

gsap.to("#flower", {x: 100, duration: 1});
gsap.to("#flower", {y: 50, duration: 1, delay: 1});  
gsap.to("#flower", {opacity: 0, duration: 1, delay: 2});

mainTL.from("#flower",{duration:aniTime,alpha:0, y: heroHeight.clientHeight})
gsap.timeline({ defaults: {duration: 1, ease: "elastic"} } )
.to("#flower", {rotation: -270})
  .to("#flower", {rotation: -360})
  .to("#flower", {rotation: -180});

mainTL.from("#flower",{duration:aniTime,alpha:0, y: heroHeight.clientHeight})
    .from("#flower",{duration:aniTime, y:"+=300", alpha:0, rotation:180}, "madeUp");


gsap.set("#flower",{scale:1});
gsap.timeline()
.from("#flower", {duration: 1, opacity:0})
.from("#flower", {y: 50, duration: 1, delay: 1})
.from("#flower", {opacity: 0, duration: 1, delay: 2});
