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
    scrub: 1,
    end: "+=2000",
  },
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");

  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1,0.4)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none reverse",
    },
  });
});
