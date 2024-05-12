var tl = gsap.timeline() //timeline means run a component one complete then second animate sync wise animate help of timeline


tl.from(".nav #part1", {
    y: -15,
    opacity: 0,
    duration: 1,
    delay: 0.9
})
tl.from(".nav #part2 h4", {
    y: -15,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4 // all same component animate one by one like h4's
})
tl.from(" h1", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    // rotate:360,// rotate a component up to 360 degrees
    repeat: 4, //repeat means repeat a animation how manyntimes -1 means infinite
    yoyo: true // yoyo means ke bounce back initial to final and final to initial animation position
})
