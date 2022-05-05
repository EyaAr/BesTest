import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Ressourceslight.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/quiz6.js";
import ContactUsForm from "components/forms/quizform6";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
          <Header/>

  <FAQ
      imageSrc="https://i.pinimg.com/736x/17/6e/1c/176e1cea2e5b10ba4fde9022a0dc30a4.jpg"
      imageContain={true}
      imageShadow={false}
      subheading="Quiz"
      heading={
        <>
          Let's <span tw="text-pink-400">Start</span>
        </>
      }
    />
    
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);