// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue"
// })\
// var tl = gsap.timeline()
// tl.to("#box1",{
//     x:1200,
//     duration:2,
//     rotate:360,
//     scale:0.5,
// })
// tl.to("#box2",{
//     x:1200,
//     duration:2,
//     rotate:360,
//     scale:0.5,
// })
// tl.to("#box3",{
//     x:1200,
//     duration:2,
//     rotate:360,
//     scale:0.5,
// })

// <!-- project using gsap and timeline -->
var tl = gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    opacity: 0,
    delay :0.5,
    duration : 0.8,
    stagger : 0.3,

})
tl.from("#main h1",{
    x: -500,
    opacity: 0,
    delay :0.4,
    duration : 0.8,
    stagger : 0.3,

})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})