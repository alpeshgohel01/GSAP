gsap.from("h1",{
    opacity:0,
    duration:1,
    x:300,
    scrollTrigger:{
        scroller:"body",
        trigger:"h1",
       // markers:true,
        //scrub:2,
        //pin:true

    }
})
gsap.from(" #box",{
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        scroller:"body",
        trigger:" #box",
        markers:true,
        scrub:2,       // a property smoothness mate ni che
        top:"-160%",
        pin:true       //pin kare element ne

    }
})
gsap.from("p",{
    opacity:0,
    duration:1.2,
    scale:0,
    y:-30,
    scrollTrigger:{
        scroller:"body",   //jene scroll karvu che te
        trigger:"p",       // je trigger karvu che te
        markers:true,      //scrolltrigger no start ane end point batave
        // top:"0%"


    }
})