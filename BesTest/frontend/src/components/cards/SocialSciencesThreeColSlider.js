import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import Axios from"axios";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
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
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
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
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {

  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await  Axios.get("/lesson/filtrbyname/social")
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
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

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://media.istockphoto.com/vectors/earth-day-man-save-green-planet-environment-people-of-world-water-vector-id1127279984?b=1&k=20&m=1127279984&s=612x612&w=0&h=yrW9SSNrQaofEPMiYI5Upum-2Pf5ovS91agYJ0z8Ct0=",
      title: "Social Sciences Lessons",
      description: "Check the Social Sciences Lessons available in the platform.",
      url: "/components/innerPages/TeacherLessonsPageSS",

    },
    {
      imageSrc: "https://img.freepik.com/free-vector/social-science-isometric-concept_1995-361.jpg",
      title: "Social Sciences Exams",
      description: "Check the Social Sciences Exams available in the platform.",
      url: "/components/innerPages/TeacherExamsPageSS",

    },
    {
      imageSrc: "https://www.siliconchips-services.com/wp-content/uploads/2020/05/business-people-looking-book_52683-28612.jpg",
      title: "Social Sciences Exercices",
      description: "Check the Social Sciences Exercices available in the platform.",
      url: "/components/innerPages/TeacherExercicesPageSS",
    }
  ]

  return (  <Container>
    <Content>
      <HeadingWithControl>
        <Heading>Sub-Sections</Heading>
      </HeadingWithControl>
      <CardSlider ref={setSliderRef} {...sliderSettings}>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage imageSrc={card.imageSrc} />
            <TextInfo>
              <TitleReviewContainer>
                <Title>{card.title}</Title>
                <RatingsInfo>
                  <StarIcon />
                </RatingsInfo>
              </TitleReviewContainer>
              <SecondaryInfoContainer>
                
              </SecondaryInfoContainer>
              <Description>{card.description}</Description>
            </TextInfo>
            <Link href={card.url}>Check Now</Link>            </Card>
        ))}
      </CardSlider>
    </Content>
  </Container>
);};