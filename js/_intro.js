import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class Intro {
  navbar = document.querySelector(".navbar");
  section1 = document.querySelector(".section-1");
  rects = this.section1.querySelectorAll(".rect");
  img = this.section1.querySelector(".images");
  outer = this.section1.querySelector(".outer-text");
  waveText = document.querySelector(".wave");

  constructor() {
    //split the text of the element
    this.splitText(this.waveText);

    //initialize animations
    this.introAnim();
  }

  splitText(el) {
    const textContent = el.textContent;
    const textSplit = textContent.split("");
    // console.log(textSplit);
    const splitArray = textSplit.map((c) => {
      return c !== " "
        ? `<span class="hov-split">${c}</span>`
        : `<span>${" "}</span>`;
    });
    //clear the inner html of that element
    const joined = splitArray.join("");
    // console.log(joined);
    el.innerHTML = "";
    el.innerHTML = joined;
  }

  introAnim() {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });

    timeline
      .to(this.rects, { stagger: 1, left: "100%" })
      .from(this.img, { width: "0%", delay: 1 }, "<")
      .from(this.outer, { translateY: "30px", opacity: 0 })
      .from(this.navbar.querySelector("ul"), { opacity: 0 }, "<")
      .fromTo(
        this.waveText.children,
        { translateY: "-20px", display: "inline-block", color: "#c4c3c3" },
        {
          translateY: "0px",
          stagger: 0.05,
          ease: "elastic.out(1, 0.3)",
          color: "#fff",
        },
        "<"
      );
  }
}

export const intro = new Intro();
