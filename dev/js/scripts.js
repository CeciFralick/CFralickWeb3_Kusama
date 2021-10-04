import { gsap } from "gsap";

const mainTL = gsap.timeline();

const aniTime = 0.5;

gsap.timeline()
.from("#hero", {duration: 1, alpha:0, opacity:0, yPercent:100})
.from("#hero h1", {opacity:0, xPercent:100, duration:0.9})
.from("#flower", {opacity:0, xPercent:100, duration:0.5})
// .from("#info #line", {opacity:0, yPercent:100, duration:0.5})
.from("#info #sun", {opacity:0, duration: 2, xPercent:100, rotation: "+=360"}, "spin")
.from("#info p", {opacity:0, yPercent:100, duration:0.5});
