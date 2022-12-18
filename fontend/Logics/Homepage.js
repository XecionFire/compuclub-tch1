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
    gsap.to(el,{y:'-=5',boxShadow: '3px 3px 10px 1px rgb(204, 204, 204) '})
}, (e) => {
    let el = e.target
    
    if (el.className != 'activity_card'){
        el = el.parentElement
    }
    gsap.to(el,{y:'0',boxShadow: '1px 1px 10px 0px rgb(204, 204, 204) '})
})