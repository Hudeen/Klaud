const isMobile = window.innerWidth <= 768; // Set isMobile to true if the window width is less than or equal to 768px

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });

const tl = gsap.timeline();
tl.from(".main__screen", { translateY: isMobile ? "-30%" : "-30%"});

ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top 20%",
    end: "120% top",
    scrub: true,
    anticipatePin: 1
});
