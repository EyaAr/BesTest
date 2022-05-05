import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TeacherExercicesEnglishFullWidthWithImage.js";
import SliderCard from "components/cards/TeacherExercicesThreeColSliderEnglish";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);