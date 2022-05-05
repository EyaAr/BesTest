import React, { useState,useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import Axios from "axios";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import Hero from "components/hero/TwoColumnWithPrimaryBackgroundM";
import List from "components/cards/ListTeachers";


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;

const PostContainer = styled.div`
  ${tw`mt-16 flex sm:w-1/2 lg:w-1/2 sm:pr-1 md:pr-6 lg:pr-12`}
  ${props =>
    props.featured &&
    css`
      ${tw`mt-16`}
      ${Post} {
        ${tw`h-auto flex-auto justify-center mb-1`}
      }
      ${Image} {
        ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t mb-1`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 mb-1`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium mb-1`}
      }
    `}
`;
const Post = tw.div`w-full h-56 sm:h-64 bg-cover bg-center cursor-pointer flex flex-col bg-gray-100 bg-opacity-0 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-10 sm:h-11/12 sm:w-96 w-full bg-cover bg-center rounded-t-lg`}
`;

const Info = tw.div`sm:w-1/2 lg:w-1/2 sm:pr-1 md:pr-6 lg:pr-12`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

function ListOfTeachers ({
  
  headingText = "",
  posts = [
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
  ]
}) 

{
  const HighlightedText = tw.span` text-purple-700 px-4 transform -skew-x-12 inline-block`;
  // const [visible, setVisible] = useState(7);
  // const onLoadMoreClick = () => {
  //   setVisible(v => v + 6);
  // };

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //   const fetchData = async () =>{
  //     setLoading(true);
  //     try {
  //       const {data: response} = await  Axios.get("/teacherR/listTeacher")
  //       setData(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);


  return  ( 
    <AnimationRevealPage>

      <Container tw="bg-gradient-to-b from-gray-600  via-gray-300 to-white relative -mx-8 -mt-8 pt-8 px-8">       

     <Hero
        heading={<> <HighlightedText>List Of Teachers</HighlightedText></>}
        
        description="List of teachers available to you... 
        Contact one if you want..."
        imageSrc="https://media.istockphoto.com/vectors/diverse-group-of-colleagues-in-a-video-conference-vector-id1311773489?b=1&k=20&m=1311773489&s=170667a&w=0&h=HZwQ-BaA9zm6bqt58OaND-hrp9KNh3zpQjUGjdDur7w="
        
        />

        
        <List 
        heading={
          <>
            
          </>
        }
      />
      {/* <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts className="custompost">
            {data.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.firstname}>
                <Post className="group" as="a" >
                  <Image imageSrc="https://img.freepik.com/free-photo/user-3d-icon-design-element_460848-11279.jpg" />
                  <Info>
                    <Category>{post.level}</Category>
                    <Title>{post.lastname}</Title>
                    { post.firstname && <Description>{post.firstname}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Next</LoadMoreButton>
            </ButtonContainer>
          )}
         
        </ContentWithPaddingXl> */}
      </Container>
      <Footer />
    </AnimationRevealPage>
  )}
//   </div>
//   );
// };

// const getPlaceholderPost = () => ({
//   imageSrc:
//   "data:image/png;base64,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",
//   category: "exam",
//   date: "April 19, 2020",
//   title: "exam",
//   url: ""
// });
export default ListOfTeachers;