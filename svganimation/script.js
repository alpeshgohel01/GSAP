var path = `M 10 100 Q 600 100 1190 100`

var finalpath = `M 10 100 Q 600 100 1190 100`

var string = document.querySelector(".string")


string.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`
    // console.log(dets)
    gsap.to("svg path",{
        attr:{d:path},
        ease:"power3.out"
      
    })
});
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},//gsap property which is change a attribute in html direct ex: attr:{attrbutename:valueput}
        duration:0.9,
        ease:"elastic.out(1,0.2)"
    })
});