gsap.from("#header", {
    opacity: 0,
    y: -150,
    delay: 0.2,
    duration: 0.8,
    ease: "back.out",
    scrollTrigger: {
        trigger: "#home",
        start: "top 30%", // <--- changed this line
        toggleActions: "play reset play reset"
    }
})

gsap.from(".left h1", {
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "back.out",
    scrub: true
})

gsap.from(".text", {
    delay: 2,
    opcaity: 0,
    duration: 1,
    scale: 0,
    y: 150,
    stagger: 1,
})