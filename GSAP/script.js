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

// gsap.to("#page2 h1", {
//     transform: "translate(-150%)",
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true
//     }
// })


// SVG

// var path = document.getElementById("path");
// var initialValue = `M 10 100 Q 500 100 990  100`;
// var finalPath = `M 10 100 Q 500 100 990  100`;

// document.getElementById("string").addEventListener("mousemove", function (e) {
//     finalPath = `M 10 100 Q ${e.clientX} ${e.clientY} 990  100`;
//     gsap.to(path, {
//         duration: 0.3,
//         attr: { d: finalPath },
//         ease: "power3.out"
//     });
// });

// document.getElementById("string").addEventListener("mouseleave", function () {
//     gsap.to(path, {
//         duration: 0.5,
//         attr: { d: initialValue },
//         ease: "elastic.out(1,0.2)"
//     });
// });



//CUSTOM CURSOR

// let main = document.querySelector("#main");
// let cursor = document.querySelector("#cursor");
// let imageDiv = document.querySelector("#image");

// main.addEventListener("mousemove", function (e) {
//     gsap.to(cursor, {
//         x: e.x,
//         y: e.y,
//         // ease: "back.out"
//     })
// })

// imageDiv.addEventListener("mouseenter", function () {
//     cursor.innerHTML="View More"
//     gsap.to(cursor,{
//         scale:4
//     })
// })

// imageDiv.addEventListener("mouseleave", function () {
//     cursor.innerHTML=""
//     gsap.to(cursor,{
//         scale:1
//     })
// })


// var menu = document.querySelector("#nav i");
// var cross = document.querySelector("#full i");

// var tl = gsap.timeline()

// tl.to("#full", {
//     right: 0,
//     duration: 0.6
// })

// tl.from("#full h4", {
//     x: 150,
//     duration: 0.6,
//     stagger: 0.2,
//     opacity: 0
// })

// tl.from("#full i", {
//     opacity: 0
// })

// tl.pause();

// menu.addEventListener("click", function () {
//     tl.play();
// })

// cross.addEventListener("click", function () {
//     tl.reverse();
// })



// function breakText() {
//     let h1 = document.querySelector("h1");
//     let h1Text = document.querySelector("h1").textContent;

//     let splittedText = h1Text.split("");

//     var clutter = ""

//     var halfValue = Math.floor(splittedText.length) / 2


//     splittedText.forEach(function (e, idx) {

//         if (idx < halfValue) {
//             clutter = clutter + `<span class="a">${e}</span>`
//         }else{
//             clutter = clutter + `<span class="b">${e}</span>`
//         }

       
//     })

//     h1.innerHTML=clutter;


// }

// breakText();

// gsap.from("h1 .a", {
//     y: 80,
//     duration: 0.6,
//     delay: 0.5,
//     opacity: 0,
//     stagger: 0.15
// })

// gsap.from("h1 .b", {
//     y: 80,
//     duration: 0.6,
//     delay: 0.5,
//     opacity: 0,
//     stagger: -0.15
// })