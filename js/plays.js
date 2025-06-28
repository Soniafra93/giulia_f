gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".main");
const sections = gsap.utils.toArray(".main .card-js");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 3,
    end: "+=300",
  },
});
