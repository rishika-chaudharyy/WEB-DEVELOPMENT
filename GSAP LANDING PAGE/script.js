let bigImage=document.querySelector("#stars")

let tl = gsap.timeline();

gsap.from(bigImage,{
    opacity:0,
    delay:1,
    duration:1,
    y:40,
    scrub:2,
    ease:"power2.out"
})

