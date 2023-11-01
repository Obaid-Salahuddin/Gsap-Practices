var tl = gsap.timeline();

tl.from("#navbar img, #navbar h3, #navbar a",{
   y: -100,
   duration: 1,
   delay: 1,
   opacity:0.5,
   stagger: 0.2
})

tl.from("#main h1",{
    y:100,
    opacity: 0,
    stagger:0.3
})

tl.from("#main>img",{
    y:-100,
    opacity:0,
    stagger:0.4
})

tl.from("#main h4",{

    scale:0,
    opacity:0,
   
})

tl.from("#main h4",{

    y:20,
    repeat:-1,
    duration:0.7,
    yoyo: true   
})