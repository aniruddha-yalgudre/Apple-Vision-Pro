function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();




// let video = 

function hero(){
    gsap.to("#page>video",{
        scrollTrigger:{
    
         scroller:'#main',
         trigger:'#page video',
         start:"1% top" ,
         end:"bottom top",
        },
         onStart:()=>{
            document.querySelector("#page video").play()
        }
    })
    gsap.to("#page>#bottom-text",{
       
        scrollTrigger:{
    
         scroller:'#main',
         trigger:'#page video',
         start:"3% top" ,
         end:"bottom top",
        },
           
         opacity:0, 
        
    })
}
hero();

function vidanim(){
    
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:true,
        // markers:true,
        pin:true
    }
    })
    
    tl.to("#page1 h1",{
        top:-40,
        
    })
    
    var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:true,
        // markers:true,
        pin:true
    }
    })
    
    tl.to("#page2 h1",{
        top:-40,
        
    })
    var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:true,
        // markers:true,
        pin:true
    }
    })
    
    tl.to("#page3 h1",{
        top:-40,
        
    })
    var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:true,
        // markers:true,
        pin:true
    }
    })
    
    tl.to("#page4 h1",{
        top:-40,
        
    })
    
}
vidanim();


  gsap.from("#page8 .vr img",{
    scrollTrigger:{
      trigger:"#page8  ",
      scroller:"#main",
      start:"top top",
      end:"50% top",
      scrub:true,
    },
      top:2,
      opacity:0,
      scale:.90,
      Expo:Power3,
  })




function canvas(){
  

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
images/Vision00001.png 
images/Vision00002.png 
images/Vision00003.png 
images/Vision00004.png 
images/Vision00005.png 
images/Vision00006.png 
images/Vision00007.png 
images/Vision00008.png 
images/Vision00009.png 
images/Vision00010.png 
images/Vision00011.png 
images/Vision00012.png 
images/Vision00013.png 
images/Vision00014.png 
images/Vision00015.png 
images/Vision00016.png 
images/Vision00017.png 
images/Vision00018.png 
images/Vision00019.png 
images/Vision00020.png 
images/Vision00021.png 
images/Vision00022.png 
images/Vision00023.png 
images/Vision00024.png 
images/Vision00025.png 



 `;
  return data.split("\n")[index];
}

const frameCount =25;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `Expo:Power3`,
  scrollTrigger: {
    scrub:.15,
    trigger: `#page10>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `100% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page10 canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `100% top`,
});
}
canvas();


gsap.from("#page12>video",{
  scrollTrigger:{
    trigger:"#page12",
    scroller:"#main",
    start:"top top",
    end:"70% top",
    // markers:true,
    scrub:true,
    pin:true
  },
    // top:2,
    opacity:0.3,
    scale:.3,
    Expo:Power3,
    transform:`translate(-50%,-50%)`
})
