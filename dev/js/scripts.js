import { gsap } from "gsap";

const mainTL = gsap.timeline();

const aniTime = 0.5;

gsap.timeline()
.from("#hero", {duration: 1, alpha:0, opacity:0})
.from("#flower", {y: 50, duration: 1, delay: 1})
.from("#flower", {xPercent:100, duration:0.2});
