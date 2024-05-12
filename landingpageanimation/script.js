function pageoneanimation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4,nav button",{   //  ,karine lakhi te pan target thay badha h4 ane button target and h1
    y:-40,
    opacity:0,
    delay:0.7,
    duration:0.5,
    stagger:0.2
})

tl.from(".center-part-1 h1",{
    x:-300,
    opacity:0,
    duration:0.5

},"-=0.3")

tl.from(".center-part-1 p",{
    x:-100,
    opacity:0,
    duration:0.4

})

tl.from(".center-part-1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part-2 img",{
    opacity:0,
    x:200,
    duration:0.5
},"-=0.3")  //timeline ni andar delay "-=0.5" aano matlab ke a element ek second timeline pela chali jaay

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6

})

}
pageoneanimation()

gsap.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        start:"top 50%"

    }
})

var tl2 = gsap.timeline({ //ahi timeline ni andar scrollTrigger laikhu jethi scrolltrigger badha mate alag alag lakhvani jarur na pade ane timeline sathe j scrolltrigger challi jaay...
    scrollTrigger:{                                                 
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"

    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from(".elem.line1.left",{ //.pachi space nathi mukeli eno matlB Ke only leftj selec thaseandarnuandar selectthay
    x:-300,
    opacity:0,
    duration:1
},"anim")

tl2.from(".elem.line1.right",{ //"anim game te lakhi sako ani jagya ae ana thi bey element sathe chale game te sarkhu spelling lakhvanu..."
    x:300,
    opacity:0,
    duration:1

},"anim")


tl2.from(".elem.line2.left",{ //.pachi space nathi mukeli eno matlB Ke only leftj selec thaseandarnuandar selectthay
    x:-300,
    opacity:0,
    duration:1
},"anim1")

tl2.from(".elem.line2.right",{ //"anim game te lakhi sako ani jagya ae ana thi bey element sathe chale game te lakho"
    x:300,
    opacity:0,
    duration:1

},"anim1")



