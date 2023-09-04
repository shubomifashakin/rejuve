import "./style.css";
import { intro } from "./js/_intro";
import { Section2 } from "./js/_secondSection";
import { ThirdSection } from "./js/_thirdSection";
import { Section4 } from "./js/_fourthSection";

window.addEventListener("load", function () {
  document.querySelector(".pre-loader").style.display = "none";

  //animate landing section into view
  intro.introAnim();
});
