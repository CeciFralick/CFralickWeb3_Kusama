// import { gsap } from "gsap";
import { gsap } from "gsap";

const mainTL = gsap.timeline();

// from = start point of timeline
// mainTL.from("#hero article",{duration:2,alpha:0, scale:2});

// to = end point of timeline
// mainTL.to("#hero article",{duration:2,alpha:0, scale:2});

const heroHeight = document.querySelector("#Hero");

const aniTime = 0.5;

console.log(heroHeight.clientHeight + "px is the height of the hero section");
console.log(heroHeight.clientWidth + "px is the width of the hero section");

gsap.to("#info", {x: 100, duration: 1});
gsap.to("#info", {y: 50, duration: 1, delay: 1});  
gsap.to("#info", {opacity: 0, duration: 1, delay: 2});

var tl = gsap.timeline({ defaults: {duration: 1, ease: "elastic"} } );
tl.to("#info", {rotation: -270})
  .to("#info", {rotation: -360})
  .to("#info", {rotation: -180});

mainTL.from("#info",{duration:aniTime,alpha:0, y: heroHeight.clientHeight})
    .from("#info h2",{duration:aniTime, y:"+=300", alpha:0, rotation:180}, "madeUp");