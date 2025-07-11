 var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    document.querySelector('#minicircle')
    .style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale}) `
    })
}

function firstPageAnimation(){

    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })

    
    .to(".boundingelem",{
        y: 0,
        duration:2,
        ease: Expo.easeInOut,
        stagger: 0.2,
        delay: -1
    })

    
    .from("#herofooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut,
        delay: -1
    })



}


function circleKoChaptaKaro(){

    var xscale = 1;
    var yscale =1;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove",function(details){

       xscale =   gsap.utils.clamp(.8,1.2,details.clientX -xprev);
       yscale =   gsap.utils.clamp(.8,1.2,details.clientY -yprev);

        // var xdiff = details.clientX -xprev;
        // var ydiff = details.clientY -yprev;

        xprev = details.clientX;
        yprev = details.clientY;

     
       circleMouseFollower(xscale,yscale)

       timeout = this.setTimeout(function(){
         document.querySelector('#minicircle')
    .style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1) `
       },100)

    })
}


circleKoChaptaKaro();

circleMouseFollower();

firstPageAnimation();


// mouse moves on images 

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate =0;
    var diffrot =0;

    elem.addEventListener("mouseleave",function(details){
     
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration:0.5
           
        })
    })


    elem.addEventListener("mousemove",function(details){
     var diff = details.clientY -elem.getBoundingClientRect().top;
         diffrot = details.clientY -rotate;
         rotate = details.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
        });
    });


});