
function loading(){
    var pl = gsap.timeline({
        scrollTrigger:{
            trigger:".loading",
           
            start:"50% 50%",
            end:"100% 50%",
            scrub:2,
            pin:true
        }
    });
    pl.to(".top",{
        left:"-50%"
    },'a')
    pl.to(".bottom",{
        right:"-50%"
    },'a')
    pl.to('.top1',{
        top:"-50%"
    },'a')
    pl.to('.bot1',{
        bottom:"-50%"
    },'a')
    
    
}
loading()

function footer(){
    var gl = gsap.timeline({
        scrollTrigger:{
            trigger:".bottom-div",
            
            start:"top 10%",
            end:"top 10%",
            scrub:2,
            pin:true,
        }
    });
    
    gl.from(".icons",{
        opacity:0,
        duration:3,
        delay:0.8,
        y:"200",
        ease:"back.out(1.7)",
    },"c")
    gl.from(".h1-bot",{
        opacity:0,
        duration:4,
        delay:0.8,
        y:"100",
        ease:"back.out(1.7)",
    },"c")
    gl.from('.h1-h1 .a',{
        y:70,
        duration:1,
        opacity:0,
        delay:0.5,
        stagger:0.15,
    })
    gl.from('.h1-h1 .b',{
        y:70,
        duration:1,
        opacity:0,
        delay:0.5,
        stagger:-0.15,
    })
}
footer()


    function breakText(){
    var h1Text = document.querySelector(".h1-h1").textContent
    var h1 = document.querySelector('.h1-h1')
    var splitedText = h1Text.split("")
    var halfValue = splitedText.length/2
    var clutter = ""
    splitedText.forEach(function(e,idx){
        if(idx<halfValue){
            clutter += `<span class='a'>${e}</span>`
        }else{
            clutter += `<span class='b'>${e}</span>`
        }
    })
    h1.innerHTML = clutter
    }
    breakText()
    var ll = gsap.timeline({
        scrollTrigger:{
            trigger:".bottom-div",
            
            start:"top 10%",
            end:"top 10%",
            scrub:2,
            pin:true,
        }
    })
    ll.from('.h1-h1 .a',{
        y:70,
        duration:1,
        opacity:0,
        delay:0.5,
        stagger:0.15,
    },'f')
    ll.from('.h1-h1 .b',{
        y:70,
        duration:1,
        opacity:0,
        delay:0.5,
        stagger:-0.15,
    },'f')