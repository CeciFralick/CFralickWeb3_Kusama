import { gsap } from "gsap";

const TL = gsap.timeline();


gsap.timeline()
.from("#smbody", {duration: 1, alpha:0, opacity:0, xPercent:-100})
.from("#body", {duration: 1, alpha:0, opacity:0, yPercent:100})
.from("#Lense", {opacity:0, xPercent:100, duration:0.9})
.from("#smflash", {opacity:0, xPercent:100, duration:0.5})
// .from("#info #line", {opacity:0, yPercent:100, duration:0.5})
;
