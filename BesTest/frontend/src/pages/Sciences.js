import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInputFrench";
import Features from "components/features/ThreeColSimple.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Sciences from "components/cards/SciencesLessons.js";
import Extra from "components/cards/PortfolioTwoCardsWithImageSciences";

import TwoPlans from "components/pricing/TwoPlansWithDurationSwitcher";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import styled from "styled-components";
import Header from "components/headers/Ressourceslight.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";


export default ({ roundedHeaderButton }) => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-gradient-to-r from-green-300  to-green-400 text-white px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;



const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div` z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 h-full flex-col justify-center items-center`;

const Container = tw.div`-mx-8 px-8 h-full  bg-gradient-to-b from-white  via-green-300 to-white relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto  md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center  lg:text-right`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`font-bold my-5 lg:my-8 text-base xl:text-lg`;
const SubscribeButton = tw.div`mt-4 sm:mt-0  bg-gradient-to-b from-indigo-400 to-indigo-200 sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-orange-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-orange-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)


const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-100`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;


  return (
    
    <AnimationRevealPage>

<Container>

        <Header roundedHeaderButton={roundedHeaderButton} />

        <TwoColumn>
          <LeftColumn>
          <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src="https://math-center.org/_nuxt/img/worksheets.7cb03c0.svg?fbclid=IwAR2YqvtQABcqdqWUfNoib2m5El5u4pwYfUa2mElIImNBPl4z_FdCEBAw7ik" />
            </IllustrationContainer>
           
          </LeftColumn>
          
          <RightColumn>
          <Heading>
            <HighlightedText>علوم الحياة و الأرض</HighlightedText>
            
            </Heading>
            <Paragraph>
            علوم الحياة ستعلمك كيف الكائنات الحية، كالنباتات، البشر و الحيوانات
تتعامل و تتعايش<br/> .و ستكتشف مما يتكون جسمك<br/>  
  ! دروس ممتعة و مشوقة في إنتضارك
          
            </Paragraph>
            <Actions>
            </Actions>
           
          </RightColumn>
        </TwoColumn>
     

      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
     
      <Sciences 
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
