import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TeacherExercicesSLEFullWidthWithImage.js";
import SliderCard from "components/cards/TeacherExercicesThreeColSliderSLE";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);