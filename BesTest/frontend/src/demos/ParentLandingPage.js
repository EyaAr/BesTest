import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/ParentMiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/faqgif.gif";

import { components } from "ComponentRenderer.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;
const PreviewCards = tw.div`flex flex-wrap -mr-12`;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

export default ({
  landingPages = components.landingPages,
}) => {
  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };
return (
  
  <AnimationRevealPage>
    <Hero />
    <MainFeature id="TrackRecord" />
    <Container>
    <Content2Xl>
    <SectionContainer id="landingPageDemos">
            <SectionHeading> A sneak peek </SectionHeading>
            <SectionDescription>
              Take a look at some of our main features mentionned above and see for yourself how it will be presented, each one in its designated section !
            </SectionDescription>
            <PreviewCards>
              {Object.entries(landingPages).map(([pageName, page], index) => (
                <PreviewCardContainer key={index}>
                  <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} >
                    <PreviewCardImageContainer>
                      <PreviewCardImage
                        transition={{ type: "tween" }}
                        variants={previewImageAnimationVariants}
                        imageSrc={page.imageSrc}
                      />
                    </PreviewCardImageContainer>
                    <PreviewButton>Our Ressources</PreviewButton>
                  </PreviewCard>
                </PreviewCardContainer>
              ))}
            </PreviewCards>
          </SectionContainer>
          </Content2Xl>
          </Container>
    <MainFeature2 id="Expertise"/>
    <Portfolio id="Portofolio" />
    <Testimonial id="Testimonials"
      subheading="Testimonials"
      heading={
        <>
          Parents <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing parents are saying about our Teachers and Services. We always appreciate your feedback and we use it to improve our services for a better learning experience for your kid."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Ressources management is very organized and presented in a way that helps us parents find what we are looking for fast.",
          customerName: "Charlotte Hale",
          customerTitle: "Mother of 2 children"
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "The parent to teacher communication is very usefull and efficient, we can always reach our kid's teachers and discuss very different topics with them regarding the learning process.",
          customerName: "Adam Cuppy",
          customerTitle: "Father of 1 child"
        }
      ]}
      textOnLeft={true}
    />
    <FAQ id="FAQs"
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    <ContactUsForm id="ContactUs" />
    <Footer />
  </AnimationRevealPage>
);
    };