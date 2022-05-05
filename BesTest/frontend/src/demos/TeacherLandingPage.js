import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TeacherTwoColumnWithInput.js";
import MainFeature from "components/blogs/TeacherThreeColSimpleWithImageAndDashedBorder.js";
import Stat from "components/features/TeacherTwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TeacherTabCardGrid.js";
import MainFeature2 from "components/features/TeacherTwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TeacherTwoColWithSteps.js";
import GetStarted1 from "components/cta/TeacherGetStartedLight.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/TeacherGetStarted";
import Footer from "components/footers/TeacherFiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
        
      <Hero roundedHeaderButton={true} />
      <GetStarted1 id="classes" />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Follow-up</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Stat/>
      <MainFeature/>
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Check the <HighlightedText>Subjects</HighlightedText>
          </>
        }
      />
      
      <MainFeature2
        subheading={<Subheading>CATCH-UP SESSIONS</Subheading>}
        heading={
          <>
            Another way for you to deliver <HighlightedText>better information.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Beneficial",
            description: "You will be paid for hosting private catch-up sessions.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "Set a schedule for your group catch-up sessions so that all students can attend in time",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Teachers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing Teaching Experience",
            quote:
              "The teaching experience in this platformm in splendid, always easy to share my lessons and exercices with my students at any time and having the ability to see and keep an eye on their progress and act accordingly.",
            customerName: "Charlotte Hale",
            customerTitle: "English Teacher."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Teacher to Parent communication !",
            quote:
              "For us  teachers, it is always good and necessary to hear the parent's opinions about our methodolgies and exchange ideas with them and help guide them in their process of teaching their kids and organizing catch-up sessions with them is always great for the kid's progress.",
            customerName: "Adam Cuppy",
            customerTitle: "Mathematics Teacher"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are ressrouces organized by subjects ?",
            answer:
              "Yes, they all are. In the ressrouces section, you will be able to check lessons, exercices and exams based on their subjects ."
          },
          {
            question: "How much will I get paid for a private catch-up session ?",
            answer:
              "Private catch-up sessions fees are included in the subscription fees in the pricing page, when you host a private catch-up session, a pourcentage of its fees will be awarded to you."
          },
          {
            question: "Can parents see the ressources I upload ?",
            answer:
              "To hold the integrity of our services, parents will always have access to everything their kids do which we think is an important part for them to provide feedback to teachers."
          },
          {
            question: "How will I be able to communicate with parents ?",
            answer:
              "You will be able to answer the feedback sent from parents and you can also discuss with them in real time."
          },
          {
            question: "How can I measure the effectiveness of my ressources ?",
            answer:
              "Ressources uploaded by yourself will be rated by students and you will be able to see all the statistics you need in one place."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
