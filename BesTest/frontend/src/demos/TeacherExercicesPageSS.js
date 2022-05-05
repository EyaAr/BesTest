import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TeacherExercicesSSFullWidthWithImage.js";
import SliderCard from "components/cards/TeacherExercicesThreeColSliderSS";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);