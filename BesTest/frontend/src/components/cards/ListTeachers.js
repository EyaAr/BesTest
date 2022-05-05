import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import Axios from"axios";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
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
const Text = tw.div`ml-10 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-6xl py-3 sm:py-4`;

export default function ListTeachers ({

  PrimaryButton1Text = "تمارين",
  PrimaryButton1Url = "/components/innerPages/LessonExercicePage",


}){
  const [Search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const Info = tw.div`sm:w-1/2 lg:w-1/2 sm:pr-1 md:pr-6 lg:pr-12`;
  const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
  const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
  const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
  const Description = tw.div``;
  
  const ButtonContainer = tw.div`flex justify-center`;
  const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
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
        const {data: response} = await  Axios.get(`/admin/listT/forparent/${user._id}`)
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr354gYkpMFCw7mNZxxKh2dkplklHKAaT_rvJ4iLhwyrOk3wxTO_JESPgoODtLxeS2mLs&usqp=CAU",
        title: "إنتاج كتابي",
        description:"   orem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod ",
     
        url: `/components/innerPages/LessonsPage`,
      },
      {
        imageSrc:
        "https://alifarabic.com/wp-content/uploads/2020/10/Learn-to-Speak-Arabic-1060x596.png",
        title: "الدرس ١",
        description:"   orem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod ",
        url: "#"
      },
      {
        imageSrc:
        "https://thumbs.dreamstime.com/b/happy-kid-study-homework-vector-illustration-happy-kid-study-homework-vector-illustration-back-school-book-cartography-cartoon-157366484.jpg",
        title: "الدرس ٢",
        description:"   orem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod ",        
        url: "#"
      },
      {
        imageSrc:
        "https://i.pinimg.com/564x/14/18/b0/1418b03ce802ea3d47de5d88367f8038.jpg",
        title: "الدرس ٣",
        description:"   orem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod ",       
        url: "#"
      },
      {
        imageSrc:
        "https://play-lh.googleusercontent.com/g21CtlUpXEWNijsbrNox8iI-AUbCPyjWXUXSrFmAySYKxYKnRrUUD0O2faCD6zcEBNU7=w412-h220-rw",
        title: "الدرس ٤",
        description:"   orem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod ",       
        url: "#"
      },
   
    ]
    
  

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  
  return ( <div> {loading && <div>Loading</div>}
  {!loading && (
   <Content>
   <HeadingWithControl>
     <Heading></Heading>
     
     <Controls>

       <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
       <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
     </Controls>
   </HeadingWithControl>

   <CardSlider ref={setSliderRef} {...sliderSettings}>
   {data.map((card, index) => (
       <Card key={index} featured={card.firstname}>
         <CardImage  imageSrc=
    "https://i.ibb.co/wrsgZpR/image-2022-04-19-224916060.png?fbclid=IwAR2aGeRQDN-147w-8iORPvDBaIly6PFSE4N6Btll0WTl8Y9wTEHy9eGKSsg" />
         <TextInfo>
           <TitleReviewContainer>
             <Title>{card.firstname } &nbsp; {card.lastname}</Title>
          
           </TitleReviewContainer>
           <SecondaryInfoContainer>
             <IconWithText>
              
             </IconWithText>
             <IconWithText>
              
             </IconWithText>
           </SecondaryInfoContainer>
           <Description>{card.email}</Description>
         </TextInfo>
         <PrimaryButton url= "/components/innerPages/SocialExercicePage">Contact</PrimaryButton>
               </Card>
       
     ))}
   </CardSlider>
  
 </Content>
  )}</div>);};