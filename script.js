function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");

    // Toggle active class on nav links
    navLinks.classList.toggle("active");

    // Toggle icon between bars and xmark
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}





ScrollTrigger.matchMedia({

  // Desktop version (screens wider than 768px)
  "(min-width: 768px)": function() {
var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 101%",
    end:"170% 50%",
    scrub:"true",
    // markers:"true",
}})
tl.to("#jar",{
    top:"115%",
    left:"7%",
    rotation: 0,  // Rotates the jar 25 degrees
    ease: "power1.out"  // Smooth easing

},'jar')
tl.to("#bee1",{
    top:"120%",
    left:"18%",
    ease:"power1.out"
},'jar')
tl.to("#bee2",{
    top:"118%",
    left:"15%",
    ease:"power1.out"
},'jar')
tl.to("#bee3",{
    top:"122%",
    left:"16%",
    ease:"power1.out"
},'jar')
tl.to("#bee4",{
    top:"125%",
    left:"13%",
    ease:"power1.out"
},'jar')
tl.to("#bee5",{
    top:"126%",
    left:"15%",
    ease:"power1.out"
},'jar')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 101%",
    end:"25% 50%",
    scrub:"true",
    // markers:"true",
}})
tl2.to("#jar",{
    top:"217%",
    left:"10%",
    scale:0.6,
    rotation: 0,  // Rotates the jar 25 degrees
    ease: "power1.out"  // Smooth easing

},'jar2')
tl.to("#bee1",{
    top:"236%",
    left:"19%",
    ease:"power1.out"
},'jar2')
tl.to("#bee2",{
    top:"236%",
    left:"42%",
    ease:"power1.out"
},'jar2')
tl.to("#bee3",{
    top:"236%",
    left:"65%",
    ease:"power1.out"
},'jar2')
tl.to("#bee4",{
    top:"317%",
    left:"30%",
    ease:"power1.out"
},'jar2')
tl.to("#bee5",{
    top:"318%",
    left:"53%",
    ease:"power1.out"
},'jar2')
  }})




ScrollTrigger.matchMedia({

  // Desktop version (screens wider than 768px)
  "(max-width: 768px)": function() {
var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 101%",
    end:"170% 50%",
    scrub:"true",
    // markers:"true",
}})
tl.to("#jar",{
    top:"136%",
    left:"24%",
    rotation: 0,  // Rotates the jar 25 degrees
    ease: "power1.out"  // Smooth easing

},'jar')
tl.to("#bee1",{
    scaleX: -1,
    top:"145%",
    left:"82%",
    ease:"power1.out"
},'jar')
tl.to("#bee2",{
    scaleX: -1,
    top:"140%",
    left:"80%",
    ease:"power1.out"
},'jar')
tl.to("#bee3",{
    scaleX: -1,
    top:"142%",
    left:"78%",
    ease:"power1.out"
},'jar')
tl.to("#bee4",{
    scaleX: -1,
    top:"140%",
    left:"84%",
    ease:"power1.out"
},'jar')
tl.to("#bee5",{
    scaleX: -1,
    top:"139%",
    left:"76%",
    ease:"power1.out"
},'jar')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 101%",
    end:"18% 50%",
    scrub:"true",
    // markers:"true",
}})
tl2.to("#jar",{
    top:"206%",
    left:"12%",
    // scale:0.6,
    rotation: 0,  // Rotates the jar 25 degrees
    ease: "power1.out"  // Smooth easing

},'jar2')
tl.to("#bee1",{
    top:"212%",
    left:"70%",
    ease:"power1.out"
},'jar2')
tl.to("#bee2",{
    top:"276%",
    left:"69%",
    ease:"power1.out"
},'jar2')
tl.to("#bee3",{
    top:"340%",
    left:"67%",
    ease:"power1.out"
},'jar2')
tl.to("#bee4",{
    top:"407%",
    left:"68%",
    ease:"power1.out"
},'jar2')
tl.to("#bee5",{
    top:"470%",
    left:"69%",
    ease:"power1.out"
},'jar2')
  }})