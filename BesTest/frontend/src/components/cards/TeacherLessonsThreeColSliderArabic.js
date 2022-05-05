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
import { useDispatch, useSelector } from "react-redux";
import { GetAllLessons } from "Actions/Exercice";

import { DeleteLesson } from "Actions/Exercice";

const Container = tw.div`relative bg-gradient-to-b from-white via-indigo-400 to-white`;
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

const PrimaryButton1 = tw.button`sm:w-96 bg-transparent text-gray-900 hocus:text-gray-700 mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-6xl py-3 sm:py-4`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default ({ PrimaryButton1Text = "Delete",
PrimaryButton1Url = "/components/innerPages/LessonExercicePage",}) => {
  // useState is used instead of useRef below beca
  const [lessons, setLessons] = useState([]);
  const getEx =async(name) =>{
    try{
  
      const result = await Axios.get(`http://localhost:3006/lesson/findlessonName/${name}`)
      setLessons(result.data) //return list lesson de matiére donnée en paramétre
      console.log(result.data)
    }
    catch(error){
    console.log(error)
    }
    }


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {

    var user = JSON.parse(localStorage.getItem('user'));

    console.log(user._id);

    // setUser(user.id);
    setUser(JSON.parse(localStorage.getItem("user")));
    // console.log(localStorage.getItem("user"))
        const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await  Axios.get(`/lesson/filtrbyname/bysubject/${user._id}`)
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetAllLessons());
    }, [dispatch]);

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
      imageSrc: "https://media.istockphoto.com/vectors/education-vector-id1191386182?k=20&m=1191386182&s=170667a&w=0&h=rNyMeEFqChvIUibfB3UIJojO2jDVLdpFHUv9vQuNnKg=",
      title: "Lesson 1",
      description: "Here is the description of lesson 1",
    },
    {
      imageSrc: "https://media.istockphoto.com/vectors/education-vector-id1191386182?k=20&m=1191386182&s=170667a&w=0&h=rNyMeEFqChvIUibfB3UIJojO2jDVLdpFHUv9vQuNnKg=",
      title: "Lesson 2",
      description: "Here is the description of lesson 2",
    },
    {
      imageSrc: "https://media.istockphoto.com/vectors/education-vector-id1191386182?k=20&m=1191386182&s=170667a&w=0&h=rNyMeEFqChvIUibfB3UIJojO2jDVLdpFHUv9vQuNnKg=",
      title: "Lesson 3",
      description: "Here is the description of lesson 3",
    }
  ]

  return ( <div> {loading && <div>Loading</div>}
  {!loading && (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Lessons List</Heading>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
        {data.slice(0).map((card, index) => (
          <Card key={index} featured={card.subject}>
              <CardImage imageSrc="https://media.istockphoto.com/vectors/education-vector-id1191386182?k=20&m=1191386182&s=170667a&w=0&h=rNyMeEFqChvIUibfB3UIJojO2jDVLdpFHUv9vQuNnKg=" />
              <TextInfo>
                  <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </TextInfo>
              <a  href={`assets/uploads/${card.type}`}download >PDF </a>
              <PrimaryButton>Check Now</PrimaryButton>
              <button as="a"
               onClick={() => {
                dispatch(DeleteLesson(card._id));
                 dispatch(GetAllLessons());
              }}
              >
              {PrimaryButton1Text}
            </button>   
            </Card>
            
          )
          )
        }
        </CardSlider>
        
      </Content>
    </Container>
  )}</div>);};
