import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackgroundArabic";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/StepsExtraArabic";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import ArabicLessons from "components/cards/ArabicLessons.js";
import Footer from "components/footers/FiveColumnWithInputForm";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import Extra from "components/features/TwoColSingleFeatureWithStatArabic";


export default function Lessons ({
}){
  const Container = tw.div`-mx-8 px-8 h-full  bg-gradient-to-b from-primary-900 via-purple-200 to-white relative`;

  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-purple-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
/*
  function getData(){
    const [data, setData]= useState({})

    useEffect(() =>{
      fetch("/lesson/listL")
      .then(res => res.json())
      .then(data => setData(data))
    }, [])

    return (
      <div>{data.title}</div>,
      <div>{data.description}</div>
    )
    
  }
  */
  return (
    <AnimationRevealPage >
      <Container>


      <Hero
        heading={<> <HighlightedText>دروس العربية</HighlightedText></>}
        
        description=".نقدم لكم دروس فى  اللغة العربية لتطوير قدراتكم  الصرفية، النحوية و اللغوية "
        imageSrc="https://onlinearabiccourses.net/wp-content/uploads/2021/03/33333-1.png"
       // primaryButtonText= "Enjoy"
        //imageCss={imageCss}
        //imageDecoratorBlob={true}
        
      />
      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
     
      <ArabicLessons 
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
