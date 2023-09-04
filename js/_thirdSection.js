import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class ThirdSect {
  section3 = document.querySelector(".section-3");

  section3Inner = this.section3.querySelectorAll(".inner-sect-container");

  constructor() {
    this.animSect();
  }

  animSect() {
    this.section3Inner.forEach((c) => {
      gsap.to(c, {
        scrollTrigger: {
          trigger: c,
          start: "top +400px",
          onEnter: () => {
            const tl = gsap.timeline();

            tl.to(c.children, { opacity: 1, stagger: 0.5 });
          },
        },
      }),
        ScrollTrigger.create({
          trigger: c,
          start: "top bottom",
          end: "top top",
          onUpdate: ({ progress }) => {
            gsap.to(c, { opacity: progress });
          },
        });
    });
  }
}

export const ThirdSection = new ThirdSect();
