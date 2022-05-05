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
import FAQ from "components/faqs/quiz5.js";
import ContactUsForm from "components/forms/quizform5";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Header from "components/headers/Ressourceslight.js";

export default () => (
  <AnimationRevealPage>
          <Header/>

  <FAQ
      imageSrc="https://thumbs.dreamstime.com/b/enfant-mignon-et-heureux-%C3%A9tudie-les-devoirs-avec-id%C3%A9e-le-vecteur-d-livre-gar%C3%A7on-cerveau-caract%C3%A8re-l-bureau-%C3%A9ducation-examen-164179886.jpg"
      imageContain={true}
      imageShadow={false}
      subheading="Quiz"
      heading={
        <>
          Let's <span tw="text-green-600">Start</span>
        </>
      }
    />
    
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);