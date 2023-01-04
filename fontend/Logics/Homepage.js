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

$(document).ready(function() {
    
})

$("#home").click(() => {
    $('html,body').animate({
        scrollTop:0
    })
})

$(".activity_card").hover((e) => {
    let el = e.target
    
    if (el.className != 'activity_card'){
        el = el.closest('activity_card')
    }
    gsap.to(el,{y:'-=5',boxShadow: '4px 4px 10px hsl(0deg 0% 0% / 0.085),5px 5px 10px hsl(0deg 0% 0% / 0.075)'})
}, (e) => {
    let el = e.target
    
    if (el.className != 'activity_card'){
        el = el.closest('activity_card')
    }
    gsap.to(el,{y:'0',boxShadow: '2px 2px 10px hsl(0deg 0% 0% / 0.085),3px 3px 10px hsl(0deg 0% 0% / 0.085)'})
})

// $('.menu-wrapper').children().each(function() {
//     console.log(this);
// })

$('#nav-toggle').on('click', (e) => {
    console.log('clicked');
})