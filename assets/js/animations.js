gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const tl = gsap.timeline();
tl.from(".main__screen", {yPercent: -30})


  ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top 20%",
    end: "120% top",
    scrub: true,
    anticipatePin: 1
  });

