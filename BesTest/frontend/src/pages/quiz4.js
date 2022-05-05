import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/quiz4.js";
import ContactUsForm from "components/forms/quizform4";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Header from "components/headers/Ressourceslight.js";

export default () => (
  <AnimationRevealPage>
          <Header/>

  <FAQ
      imageSrc="https://img.freepik.com/free-vector/cute-little-kid-boy-think-with-question-mark_97632-2809.jpg"
      imageContain={true}
      imageShadow={false}
      subheading="Quiz"
      heading={
        <>
          Let's <span tw="text-blue-600">Start</span>
        </>
      }
    />
    
    <ContactUsForm />
    
    <Footer />
  </AnimationRevealPage>
);