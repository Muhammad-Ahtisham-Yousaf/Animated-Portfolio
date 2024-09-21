
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
})
  
  
  console.log("workking scripts");
  gsap.registerPlugin(ScrollTrigger);

// var tl1 = gsap.timeline()
  window.onload = function() {
    console.log("onload working");

    const progressBar = document.getElementById('progress-bar');
    const progressCount = document.getElementById('progress-count');
    const content = document.getElementById('content');
    const header = document.querySelector('.header');
    let count = 0;
    window.addEventListener("scroll",() =>{
    
      header.classList.toggle("sticky" , window.scrollY > 0)
      // console.log(header);
    
    })
    if (!progressBar || !progressCount) {
      console.error('Required elements are missing from the DOM.');
      return;
    }

    var timeline = gsap.timeline({
      onUpdate: function() {
        if (count <= 100) {
          progressCount.innerText = `${count}%`;
          count++;
        }
      },
      onComplete: function() {
        document.getElementById('preloader').style.display = 'none';
        content.style.display = 'inline-block'; // Show the main content after preloading
        // Animate the header and content after the preloader is gone
        var tl2 = gsap.timeline();
        tl2.from (content, {
          y:1000,
          opacity:0,
          duration:2,
          ease:"power4.inOut"
        })
        
        tl2.to(header, { 
          opacity: 1, 
          duration: 1.5, 
          ease: "power4.out" 
        });

        tl2.from(".logo", {
          y: -50,
          opacity: 0,
          duration: 1.3,
          ease: "elastic.out",
        }, "-=1"); // Start this animation 1 second before the previous one ends

        tl2.from(".navbar ul li", {
          y: -50,
          opacity: 0,
          ease: "elastic.out",
          stagger: 0.2,
        }, "-=1"); // Also start this 1 second before the previous one ends

        tl2.from(".home-content h1, .text-animation, .home-content p", {
          x: 200,
          stagger: 0.4,
          opacity: 0,
          ease: "elastic.out",
          duration: 1.5,
        }, "-=0.5"); // Start slightly before the previous animation ends

        tl2.from(".home-content button, .socials,.whatsapp_float", {
          x: -200,
          opacity: 0,
          ease: "elastic.out",
          duration: 1.5,
        }, "-=1"); // Start slightly before the previous animation ends

      }
    });

    timeline.to(progressBar, {
      width: '100%',
      duration: 0.2, // Adjust the duration as needed
      ease: 'power4.out',
      onUpdate: function() {
        const progress = Math.floor(timeline.progress() * 100);
        if (progress <= 100) {
          progressCount.innerText = `${progress}%`;
        }
      }
    });
  };

  // GSAP Timeline for Text Animation with Spans
  var spans = document.querySelectorAll(".text-animation span");
  var tl = gsap.timeline({repeat: -1, repeatDelay: 0.5}); // Loop infinitely with a short delay between loops

  spans.forEach((span, index) => {
    tl.fromTo(span, 
      { y: 100, opacity: 0, display: 'none' }, // Start state
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: "elastic.out", 
        display: 'inline-block',
        onStart: function() { 
          span.style.display = 'inline-block'; // Ensure the span is displayed when animation starts
        }
      })
      .to(span, 
        { 
          y: -100, 
          opacity: 0, 
          duration: 0.5, 
          ease: "elastic.in", 
          delay: 2, // Visible for 2 seconds before disappearing
          onComplete: function() {
            span.style.display = 'none'; // Hide the span after animation ends
          }
        });
  });
  
  // Animation for page 2
  document.addEventListener("DOMContentLoaded", function() {
    
  // Animate the section heading first
  gsap.from("#services .heading", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#services",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top -20%",
      scrub: 0.6
    }
  });
  // Animate each .services-box independently as it scrolls into view
  document.querySelectorAll('.services-box').forEach((box, index) => {
    // Animate h2 in each services-box
    gsap.from(box.querySelectorAll('h2'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out",
      scrollTrigger: {
        trigger: box,
        scroller: "body",
        // markers: true,
        start: "top 75%", // Adjust start position as needed
        end: "top -10%",
        scrub: 0.6
      }
    });

    // Animate p and strong-text in each services-box
    gsap.from(box.querySelectorAll('p, .strong-text'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out",
      stagger: 0.6, // Adds a delay between animations
      scrollTrigger: {
        trigger: box,
        scroller: "body",
        // markers: true,
        start: "top 70%", // Adjust start position as needed
        end: "top -55%",
        scrub: 0.6
      }
    });
  });
  
  // page 2 animations
  gsap.from("#projects .heading", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#projects",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top -20%",
      scrub: 0.6
    }
  });  
  
  gsap.from ("#projects .project-box", {
    y:500,
    opacity:0,
    duration:3,
    stagger: 0.6, 
    ease:"power4.out",
    scrollTrigger:{
      trigger:"#projects",
      scroller:"body",
      start:"top 40%",
      end:"top -10%",
      scrub:true,
    }
    
  })
  
  // education page animations
  gsap.from("#education .heading", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#education",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top -20%",
      scrub: 0.6
    }
  }); 

// Animate odd timeline items (from the left)
document.querySelectorAll('.timeline-item:nth-child(odd)').forEach(item => {
  gsap.from(item, {
    x: -500,   // Move from left
    opacity: 0,
    duration: 1.5,
    stagger: 0.6, // Adds a delay between animations
    ease: "power4.out",
    scrollTrigger: {
      trigger: item,  // Trigger the animation on this specific item
      scroller: "body",
      start: "top 80%",  // Adjust the start point as needed
      end: "top 30%",    // Adjust the end point as needed
      scrub: true,
    }
  });
});

// Animate even timeline items (from the right)
document.querySelectorAll('.timeline-item:nth-child(even)').forEach(item => {
  gsap.from(item, {
    x: 500,   // Move from right
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: item,  // Trigger the animation on this specific item
      scroller: "body",
      start: "top 80%",  // Adjust the start point as needed
      end: "top 30%",    // Adjust the end point as needed
      scrub: true,
    }
  });
});

  // certificate animations
gsap.from("#certificate .heading", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#certificate",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top -20%",
      scrub: 0.6
    }
  });
     
  // contact page animations
  gsap.from("#contact .heading,form", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#contact",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -20%",
      scrub: 0.6
    }
  }); 


// mentors page animations
   gsap.from("#mentors .heading", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#mentors",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top -20%",
      scrub: 0.6
    }
  });
  gsap.from ("#mentors .card", {
    y:200,
    opacity:0,
    stagger:1, // Adds a delay between animations
    ease:"bounce.out",
    scrollTrigger:{
      trigger:"#mentors",
      scroller:"body",
      start:"top 40%",
      end:"top 0%",
      scrub:0.3,
    }
    
  })
  // // for image change
  // const homeImg = document.querySelector('.home-img img');

  // function updateImage() {
  //     if (window.innerHeight > window.innerWidth) {
  //       // console.log(window.innerHeight,window.innerWidth);
  //         homeImg.src = "{% static 'images/hero_portrate.png' %}";
          
  //     } else {
  //         homeImg.src = "{% static 'images/second-project-image.jpg' %}";
  //     }
  // }

  // updateImage();
  // window.addEventListener('resize', updateImage);

  // Shery.mouseFollower({
  //   //Parameters are optional.
  //   duration: 1,
  //   });
    
  //       Shery.makeMagnet("a,button", {
  //           // duration: 1,
  //       });
    
    
  //      Shery.imageEffect(".home-img img", {
  //      style: 5, //Select Style
    
  //     //  preset: "./presets/wigglewobble.json",
  //     //  gooey:true,
  //     //  debug:true
  //      });

});

