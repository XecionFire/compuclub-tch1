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

$(".activity_card").hover((e) => {
    let el = e.target
    
    if (el.className != 'activity_card'){
        el = el.parentElement
    }
    gsap.to(el,{y:'-=5',boxShadow: '4px 4px 10px hsl(0deg 0% 0% / 0.085),5px 5px 10px hsl(0deg 0% 0% / 0.085)'})
}, (e) => {
    let el = e.target
    
    if (el.className != 'activity_card'){
        el = el.parentElement
    }
    gsap.to(el,{y:'0',boxShadow: '2px 2px 10px hsl(0deg 0% 0% / 0.085),3px 3px 10px hsl(0deg 0% 0% / 0.085)'})
})