import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import LessonsPage from "pages/Lessons.js";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import Axios from"axios";


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw` w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-10 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-400 hover:to-gray-600 text-gray-100 hocus:bg-gray-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 sm:rounded-br-6xl py-3 sm:py-4`;
export default ()=> {
  

  
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    var user = JSON.parse(localStorage.getItem('user'));

    console.log(user._id);

    // setUser(user.id);
    setUser(JSON.parse(localStorage.getItem("user")));
    // console.log(localStorage.getItem("user"))

    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await  Axios.get(`/lesson/filtrbyname/math/${user._id}`)
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  
 
  const cards = [
      {
        imageSrc:
        "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1711/bbtreesubmission171105217/90826696-%E6%95%B0%E5%AD%A6%E3%80%81%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E5%8B%89%E5%BC%B7%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E5%A5%B3%E3%81%AE%E5%AD%90%E3%80%82.jpg",
        title: " تكوين الاعداد",
        description:"تكوين الاعداد و الارقام الفردية و الزوجية ",
     
        url: `/components/innerPages/LessonsPage`,
      },
      {
        imageSrc:
        "https://previews.123rf.com/images/viyada123rf/viyada123rf1807/viyada123rf180700018/105746701-boys-are-writing-kids-doing-homework-maths-at-home-cartoon-cute-little-boy-in-red-shirt-siting-on-th.jpg",
        title: " حسابات ١",
        description:" تكوين الاعداد و الارقام الفردية و الزوجية ",
        url: "#"
      },
      {
        imageSrc:
        "https://media.istockphoto.com/vectors/cute-little-kid-girl-study-math-number-count-vegetable-vector-id1227546221",
        title: "حسابات ٢",
        description:" تكوين الاعداد و الارقام الفردية و الزوجية ",        
        url: "#"
      },
      {
        imageSrc:
        "https://us.123rf.com/450wm/brgfx/brgfx1701/brgfx170100043/69973760-three-children-and-numbers-illustration.jpg?ver=6",
        title: "حسابات ٤",
        description:"   تكوين الاعداد و الارقام الفردية و الزوجية ",       
        url: "#"
      },
   
    ]
    
  

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  
  return (<div> {loading && <div>Loading</div>}
  {!loading && (
    <Container>
    <Content>
      <HeadingWithControl>
        <Heading></Heading>
        <Controls>
          <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
          <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
        </Controls>
      </HeadingWithControl>
      <CardSlider ref={setSliderRef} {...sliderSettings}>
      {data.slice(0).map((card, index) => (
          <Card key={index} featured={card.subject}>
            <CardImage imageSrc=        
            "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1711/bbtreesubmission171105217/90826696-%E6%95%B0%E5%AD%A6%E3%80%81%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E5%8B%89%E5%BC%B7%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E5%A5%B3%E3%81%AE%E5%AD%90%E3%80%82.jpg"
 />
            <TextInfo>
              <TitleReviewContainer>
                <Title>{card.title}</Title>
             
              </TitleReviewContainer>
              <SecondaryInfoContainer>
                <IconWithText>
                 
                </IconWithText>
                <IconWithText>
                 
                </IconWithText>
              </SecondaryInfoContainer>
              <Description>{card.description}</Description>
            </TextInfo>
            <PrimaryButton>Start</PrimaryButton>
            </Card>
          
          ))}
        </CardSlider>
      </Content>
      </Container>
      )}</div>);};
