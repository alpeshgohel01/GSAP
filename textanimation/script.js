function breakTheText(){
    var h1 = document.querySelector("h1")

var h1Text = h1.textContent

var splittedText = h1Text.split("")
 // console.log(splittedText)

 var half = splittedText.length/2
// console.log(half);

var clutter = ""

splittedText.forEach(function(elm,idx){
    
    // clutter += `<span>${elm}</sapn>`
    
    
    if(idx<half){
        clutter += `<span class="f">${elm}</span>`
    }
    else{
        clutter += `<span class="s">${elm}</span>` //span inline element hoy etle aa property aapvi pade baki gsap no lage tethi style ma sapn na display inline block aapvupade
    }

})
    h1.innerHTML = clutter
}
breakTheText()

gsap.from("h1 .f",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
    
})
gsap.from("h1 .s",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
    
})

