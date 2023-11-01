// gsap.to("#box",{

//     x:600,
//     backgroundColor:"red",
//     duration: 2,
//     rotate: 360,

// });
gsap.from("#box", {
  x: 500,
  y: 300,
  backgroundColor: "blue",
  duration: 2,
  rotate: 360,
});

gsap.to("li", {
  x: 200,
  fontSize: 20,
  delay: 1,
  duration: 2,
  color: "red",
  // yoyo:2,
  // repeat:2
  stagger: 1,
});

var tl = gsap.timeline();

tl.to("h1", {
  x: 200,
  duration: 1,
});

tl.to("h2", {
  x: 300,
  duration: 2,
});

tl.to("h3", {
  x: 400,
  duration: 3,
});
