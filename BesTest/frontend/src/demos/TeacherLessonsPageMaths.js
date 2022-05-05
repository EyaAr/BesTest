import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TeacherLessonsMathematicsFullWidthWithImage.js";
import SliderCard from "components/cards/TeacherLessonsThreeColSliderMaths";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);