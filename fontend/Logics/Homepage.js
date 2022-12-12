const Navbar = $(".navbar");

ScrollTrigger.create({
    start:'25px',
    markers:true,
    onEnter:() => {
        gsap.to(Navbar,{backgroundColor:'#103396',duration:0.1})
    },
    onLeaveBack:() => {
        gsap.to(Navbar,{backgroundColor:'#10339600',duration:0.1})
    }
})