import "./style.css";
import { gsap } from "gsap";
import { intro } from "./js/_intro";
import { Section2 } from "./js/_secondSection";
import { ThirdSection } from "./js/_thirdSection";
import { Section4 } from "./js/_fourthSection";

window.addEventListener("load", function () {
  //allow scrolling
  this.document.querySelector("body").style.overflowY = "auto";
  //hide the pre-loader
  gsap.to(".pre-loader", { translateY: "-100%", display: "none" });

  //animate landing section into view
  intro.introAnim();
});
