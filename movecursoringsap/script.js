var main = document.querySelector(".main")

var cursor = document.querySelector(".cursor")

var img = document.querySelector(".image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "sine.out",
    })
});
img.addEventListener("mouseenter",function(dets){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffff8b"
    
    })
});
img.addEventListener("mouseleave",function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    
    })
});

