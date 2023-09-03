import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class Sect4 {
  section4 = document.querySelector(".section-4");

  constructor() {
    this.animSect();
  }

  animSect() {
    const tl = gsap.timeline();
    tl.to(this.section4.children, {
      scrollTrigger: {
        trigger: this.section4,
        start: "top +200px",
        onEnter: () => {
          gsap.fromTo(
            this.section4.children,
            { opacity: 0 },
            { stagger: 0.3, opacity: 1 }
          );
        },
      },
    });
  }
}

export const Section4 = new Sect4();
