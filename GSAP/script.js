// // gsap.to("#box1",{
// //      x:1000,
// //      duration:2,
// //      delay:1
// // })

// // gsap.to("#box2",{
// //     x:100,
// //     y:100,
// //     duration:2,
// //     delay:1
// // })

// // gsap.to("#box1",{
// //     x:1200,
// //     duration:2,
// //     delay:1
// // })

// // gsap.from("#box2",{
// //     x:1200,
// //     duration:2,
// //     delay:1
// // })

// // gsap.to("#box1",{
// //     x:1300,
// //     delay:1,
// //     duration:2,
// //     rotate:360,
// //     backgroundColor:"blue",
// //     borderRadius:"50%",
// //     scale:0.5
// // })

// // gsap.from("#box1",{
// //     x:1300,
// //     delay:1,
// //     duration:2,
// //     rotate:360,
// //     backgroundColor:"blue",
// //     borderRadius:"50%",
// //     scale:0.5
// // })

// // gsap.from("h1",{
// //     color:"red",
// //     opacity:0,
// //     y:20,
// //     duration:2,
// //     delay:1,
// //     stagger:-1
// // })

// // gsap.to("#box", {
// //     x: 1200,
// //     backgroundColor: "yellow",
// //     duration: 2,
// //     delay: 1,
// //     rotate: 360,
// //     repeat: 2,
// //     yoyo:true
// // })

// // gsap.to("#box1",{
// //     x:1200,
// //     rotate:360,
// //     duration:1.5,
// //     delay:1
// // })
// // 4
// // gsap.to("#box2",{
// //     x:1200,
// //     backgroundColor:"red",
// //     // rotate:360,
// //     duration:1.5,
// //     delay:2.5 /*1.5+1 from box1 */
// // })

// // gsap.to("#box3",{
// //     x:1200,
// //     scale:0.5,
// //     borderRadius:"50%",
// //     delay:4
// // })

// // var tl = gsap.timeline();

// // tl.to("#box1", {
// //     x: 1200,
// //     rotate: 360,
// //     duration: 1.5,
// //     delay: 1
// // })

// // tl.to("#box2", {
// //     x: 1200,
// //     backgroundColor: "red",
// //     rotate: 360,
// //     duration: 1.5,
// //     delay: 2.5
// // })

// // tl.to("#box3", {
// //     x: 1200,
// //     scale: 0.5,
// //     borderRadius: "50%",
// //     delay: 4
// // })

// var tl = gsap.timeline();

// tl.from("h2", {
//     y: -30,
//     opcaity: 0,
//     duration: 1,
//     delay: 0.5
// })

// tl.from("h4", {
//     y: -30,
//     opcaity: 0,
//     duration: 1,
//     delay: 0.5,
//     stagger: 0.3
// })

// tl.from("h1", {
//     u: 20,
//     opcaity: 0,
//     duration: 0.5,
//     scale: 0.2
// })







//Scroll Trigger

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     // scrollTrigger: "#page2 #box"
//     scrollTrigger:{
//         trigger : "#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 h2",{
//     opacity:0,
//     x:-500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     rotate:720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scoller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         // scrub:true
//         scrub:5,
//         pin:true
//     }
// })

gsap.to("#page2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",

    }
})