const Navbar = $(".navbar");

ScrollTrigger.create({
    start:'25px',
    onEnter:() => {
        gsap.to(Navbar,{backgroundColor:'#103396',duration:0.1})
    },
    onLeaveBack:() => {
        gsap.to(Navbar,{backgroundColor:'#10339600',duration:0.1})
    }
})

$("#home").click(() => {
    $('html,body').animate({
        scrollTop:0
    })
})