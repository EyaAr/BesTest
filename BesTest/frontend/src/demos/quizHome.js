import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/quizFeature.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Header from "components/headers/Ressourceslight.js";


export default () => (
  <AnimationRevealPage>
          <Header/>

    <Features />
    <Footer />
  </AnimationRevealPage>
);
