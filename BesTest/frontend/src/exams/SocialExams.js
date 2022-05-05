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

function SocialExams ({
  
  headingText = "",
  posts = [
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
  ]
})

{const [Search, setSearch] = useState('');
const handleChange = (e) => {
  setSearch(e.target.value);
};
  const HighlightedText = tw.span`bg-gradient-to-b from-pink-200  to-pink-500 text-white px-4 transform -skew-x-12 inline-block`;
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
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
        const {data: response} = await  Axios.get(`/examen/examsBysocials/${user._id}`)
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);


  return ( <div> {loading && <div>Loading</div>}
  {!loading && (
    <AnimationRevealPage>
      <Container tw="bg-gradient-to-b from-white  via-pink-200 to-white relative -mx-8 -mt-8 pt-8 px-8">        

     <Hero
        heading={<> <HighlightedText>امتحانات مواد إجتماعية </HighlightedText></>}
        
        description=""
        imageSrc="https://math-center.org/_nuxt/img/coloring.4e9b469.svg?fbclid=IwAR3tLHOGK-nKf-s1o6GgiTwO1nefvsVr1vKGn8IMSaQXv3VB9ErMDCiN3dU"
        
        />
      
      <ContentWithPaddingXl>
      <div className="search-box" >
              <label htmlFor="main-search" />
              <input className="search-text"  type="text" onChange={(e)=>handleChange(e)} id="main-search" placeholder="Search" />
              <button className="search-btn" type="submit" /></div>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts className="custompost">
          {data.slice(0, visible).filter(el=>el.title.toLowerCase().includes(Search.toLowerCase())).map((post, index) => (
              <PostContainer key={index} featured={post.subject}>
                <Post className="group" as="a" >
                <td><a href={`assets/uploads/${post.type}`}download ><Image imageSrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLFA23OIo1dJn7VkC91fO0gbfsRWzTL8cowQwqPzuqfXRILOr22mrZz6t3CS2qEy1N3o&usqp=CAU" /></a></td>
                  <Info>
                    <Category>{post.level}</Category>
                    
                   
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    { post.description && <Description>{post.description}</Description>}
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
         
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
    )}
    </div>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLFA23OIo1dJn7VkC91fO0gbfsRWzTL8cowQwqPzuqfXRILOr22mrZz6t3CS2qEy1N3o&usqp=CAU",
  category: "امتحانات",
  date: "April 19, 2020",
  title: "امتحان",
  url: ""
});

export default SocialExams;
