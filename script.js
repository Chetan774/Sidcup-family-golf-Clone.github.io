
const blur = document.querySelector("#curser-blur")
const crsr = document.querySelector("#curser")
document.addEventListener("mousemove",function(dets){
    
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
    
})

const h4all = document.querySelectorAll("#nav h4"); 
// const h1 = document.querySelector("#page4h1");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        curser.style.scale = 3.5;
        curser.style.border =  "0.5px solid #fff"
        curser.style.backgroundColor = "transparent"
        // h1.style.border = "#95C11E"
        
    })  
    elem.addEventListener("mouseleave",function(){
        curser.style.scale = 1;
        curser.style.border =  "0px solid #95C11E"
        curser.style.backgroundColor = "#95C11E"
        // h1.style.border = "#fff"
        
    })  


})








gsap.to("#nav",{
    // color : "red"
    backgroundColor :"#000",
    duration :"0.5",
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
        
    }
  
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration :"0.5",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 1
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity : 0,
    duration:1,
    // stagger : 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller : "body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }

})
gsap.from(".card",{
    scale:0.8,
    opacity : 0,
    duration:1,
    stagger : 0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller : "body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }

})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end: "top 45%",
        scrub: 2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end: "top 45%",
        scrub: 2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end: "top 75%",
        scrub: 3
    }
})



