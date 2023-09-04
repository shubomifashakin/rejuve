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
  dropBtn = document.querySelector(".drop-btn");
  dropdownList = document.querySelector(".dropdown-list");
  scrolled = 0;

  constructor() {
    //split the text of the element
    this.splitText(this.waveText);

    this.dropBtn.addEventListener("click", () => {
      this.dropdownList.classList.toggle("active");
    });

    //if anywhere besides the navbar on the site is clicked, close the dropdown
    document.addEventListener("click", (e) => {
      if (e.target.closest(".navbar")) return;
      this.dropdownList.classList.remove("active");
    });

    document.addEventListener("scroll", (e) => {
      //if the value scrolled is less than our stored scrolled value then we are scrolling backward, so show the navbar

      if (scrollY < this.scrolled) {
        gsap.to(this.navbar, { translateY: "0", duration: 0.5 });
      }
      //if the value scrolled is greater than our previously stored value and we have scrolled past the devices view port, then we are scrolling forward so hide the navbar
      else if (scrollY > this.scrolled && scrollY > 300) {
        this.dropdownList.classList.remove("active");
        gsap.to(this.navbar, {
          translateY: "-100%",
          ease: "bounce",
          duration: 0.5,
        });
      }

      //store the new scrolled position
      this.scrolled = scrollY;
    });
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
      .from(this.img, { translateX: "-100%", delay: 1 }, "<")
      .to(this.img, { filter: "grayscale(0)" }, "<")
      .from(this.outer, { translateY: "30px", opacity: 0 })
      .from(this.navbar.querySelector("ul"), { opacity: 0 }, "<")
      .fromTo(
        this.waveText.children,
        { translateY: "-10px", display: "inline-block", color: "#c4c3c3" },
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
