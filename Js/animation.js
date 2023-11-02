var tl = gsap.timeline();

tl.from("#navbar img, #navbar h3, #navbar a", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0.5,
  stagger: 0.2,
});

tl.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#main>img", {
  y: -100,
  opacity: 0,
  stagger: 0.4,
});

tl.from("#main h4", {
  scale: 0,
  opacity: 0,
});

tl.from("#main h4", {
  y: 20,
  repeat: -1,
  duration: 0.7,
  yoyo: true,
});

// section animatin



gsap.to("#section-fir #card", {
    duration:2,
    x:400,
    scrollTrigger: {
        trigger: "#section-fir #card",
        scroller:"body",
        scrub:true
    }
});

gsap.from("#section-fir h2",{
    x: -700,
    color: "gray",
  scrollTrigger:{
    trigger:"#section-fir h2",
    scrub:5
  }
  

})


gsap.from("#section-sec #card", {
    scale:0,
    duration:1,
    x:-200,
    y:-300,
    scrollTrigger: {
        trigger: "#section-sec #card",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end: "top 20%",
        scrub:2
    }

  })
gsap.from("#section-sec h2",{
    x: 700,
    color: "red",
  scrollTrigger:{
    trigger:"#section-sec h2",
    scrub:5
  }
  

})

