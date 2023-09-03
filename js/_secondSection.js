import { intro } from "./_intro";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class Sect2 {
  section2 = document.querySelector(".section-2");
  companyInfo = document.querySelectorAll(".company--info");

  constructor() {
    //split the text of each info paragraph
    this.companyInfo.forEach((c) => intro.splitText(c));
    //initialize animations
    this.sect2Anim();
  }

  sect2Anim() {
    gsap.to(this.section2, {
      scrollTrigger: {
        trigger: this.section2,
        start: "top +150px",
        onEnter: () => {
          gsap.to(this.section2.querySelector(".leading-text-1"), {
            opacity: 1,
            translateY: 0,
            duration: 1,
          });

          this.companyInfo.forEach((c) =>
            gsap.to(c.children, {
              opacity: 1,
              duration: 0.05,
              stagger: 0.005,
            })
          );
        },
      },
    });

    gsap.to(this.section2, {
      scrollTrigger: {
        trigger: this.section2,
        start: "bottom bottom",
        onEnter: () => {
          gsap.to(this.section2.querySelector(".leading-text-2"), {
            opacity: 1,
            translateY: 0,
            duration: 1,
          });
        },
      },
    });
  }
}

export const Section2 = new Sect2();
