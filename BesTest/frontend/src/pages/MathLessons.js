import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInputMath";

import MathLessons from "components/cards/MathLessons.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import styled from "styled-components";
import Extra from "components/features/TwoColSingleFeatureWithStatMath";
import Header from "components/headers/Ressourceslight.js";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span` text-gray-700 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

  const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
  
  const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
  const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
  
  const Heading = styled.h1`
    ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
    span {
      ${tw`inline-block mt-2`}
    }
  `;
  
  const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
  
const Container = tw.div`-mx-8 px-8 h-full  bg-gradient-to-b from-white via-gray-300 to-gray-600 relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto  md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const SubscribeButton = tw.div`mt-4 sm:mt-0  bg-gradient-to-b from-indigo-400 to-indigo-200 sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

  return (
    
    <AnimationRevealPage>
      <Header/>
        <Container>
  

        <TwoColumn>
          <LeftColumn>
            <Heading>
            <HighlightedText>دروس رياضيات </HighlightedText>
            
            </Heading>
            <Paragraph>
           
              
          
            </Paragraph>
            <Actions>
            </Actions>
           
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src="https://math-center.org/_nuxt/img/teacher-with-board.1ae573b.svg"  />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
     

      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
     
      <MathLessons
        heading={
          <>
            
          </>
        }
      />
      
      
      <Extra        
      />

     
      
      <Footer />
      </Container>

    </AnimationRevealPage>
  );
}
