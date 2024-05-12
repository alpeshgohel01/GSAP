var menu = document.querySelector(".nav i")
var close = document.querySelector(".full i")
var tl = gsap.timeline()

tl.to(".full",{
    right:0,
    duration:0.4
})
tl.from("h4",{
    x:90,
    opacity:0,
    duration:0.4,
    stagger:0.2
})
tl.from(".full i",{
    opacity:0,
    duration:0.2,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})