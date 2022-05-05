import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import Hero from "components/hero/TwoColumnWithPrimaryBackgroundScience";

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

export default function ScienceExercice({
  
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
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await  Axios.get("http://localhost:3001/exercice/Sciences")
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const HighlightedText = tw.span`bg-gradient-to-b from-green-200  to-green-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const [visible, setVisible] = useState(8);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };


  return (

    <div> {loading && <div>Loading</div>}
  {!loading && (
    <AnimationRevealPage>

    
      
      <Container tw="bg-gradient-to-b from-white  via-green-300 to-white relative -mx-8 -mt-8 pt-8 px-8">
      <Header  />

      <Hero
        heading={<> <HighlightedText>تمارين الايقاظ العلمي</HighlightedText></>}
        
        description="تمارين متنوعة تغطي كامل البرنامج الدراسي لدعم المكتسبات"
        imageSrc="https://math-center.org/_nuxt/img/worksheets.7cb03c0.svg?fbclid=IwAR05p_YZJYeFLolCEwnaOpeJphoi1FaE55pggcPd7uT2ZLof3GOL6ifNadA"
        
        />
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {data.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.subject}>
                <Post className="group" as="a" >
                  <Image imageSrc="data:image/jpeg;base64,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WlZ6vMHDqKmVnzAnL6yqB6xF9C04OdmsMR6OL3Y3Fh0ANb2N9wtwn6J+Sa3sj7wlMrfovxIa9HGMut7VEWp7wR8JKtRk25Q1+0RUqFWEaddfDk1e7V22njbXCyViscm9l+hEYyoS1SzLTSndrNlqavY39ZUGoAs/HhdcXSxa0qdVFR86gkZspViL21a3l1bprUv0c48+vjaY7qOvxlg2NyGFKoKtbFVqzKCoBNkUHflBJtK1RlPCouyz6vH0LP8AK0V+xxzwknZ8Mmn330WGaK5z2P8A8Bf3i/1xz2P/AMBf3i/1zo/yTR9k/eP5x8kUeo/eMn7lT4vw9D331fo0+k/qHODVx36uv71f655FTHfqw8Kyj/vnSPkil1H70+fI9L63nHuVPi/D0Hvsf0afSf1DnJxm0B6tFh/1gfgTPHyntW/9mPuru77TpPyPS+t5x8j0vrfekfcYcX4ehH3qGbpQ/n+oc59N2gfWosf+sB7iRPhqY79XXxrKf++dH+R6X1vOffkil1H709WxU+L8PQ9W2RX+lD+f6hzkVcd+rr+9X+uOex/+Av7xf650f5Io9R+8Y+SKPsn7x/Oe+5U+L8PQ999X6NPpP6hzjntof4C/vF/rjnsf+rr+9X+udJ+SqPsfxN+c+jZlH2Pefzj3Knxfh6D31fo0+k/qHNeex/6uv71f656Svj/1dPGov9c6UNn0vYE9DB0h/wC2n3RPPcqfF+HoPfV+jT6T+oVnkPzqiqK4RC7hlUOpv0bHcT1CWmrSVlKsoZToVIuCO0HfPSoBuAHcLT3NNOChFRRlq1PxJbzSWWCywVtW3pq2YqNFUUKihVGgUAAAdgG6ZYiTKxERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z" />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Next</LoadMoreButton>
            </ButtonContainer>
          )}{data.map(e=>(<span>{e.level}</span>))}
        </ContentWithPaddingXl>
        <Footer />
      </Container>
      
      </AnimationRevealPage>

)}</div>);
};


const getPlaceholderPost = () => ({
  imageSrc:"data:image/jpeg;base64,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WlZ6vMHDqKmVnzAnL6yqB6xF9C04OdmsMR6OL3Y3Fh0ANb2N9wtwn6J+Sa3sj7wlMrfovxIa9HGMut7VEWp7wR8JKtRk25Q1+0RUqFWEaddfDk1e7V22njbXCyViscm9l+hEYyoS1SzLTSndrNlqavY39ZUGoAs/HhdcXSxa0qdVFR86gkZspViL21a3l1bprUv0c48+vjaY7qOvxlg2NyGFKoKtbFVqzKCoBNkUHflBJtK1RlPCouyz6vH0LP8AK0V+xxzwknZ8Mmn330WGaK5z2P8A8Bf3i/1xz2P/AMBf3i/1zo/yTR9k/eP5x8kUeo/eMn7lT4vw9D331fo0+k/qHODVx36uv71f655FTHfqw8Kyj/vnSPkil1H70+fI9L63nHuVPi/D0Hvsf0afSf1DnJxm0B6tFh/1gfgTPHyntW/9mPuru77TpPyPS+t5x8j0vrfekfcYcX4ehH3qGbpQ/n+oc59N2gfWosf+sB7iRPhqY79XXxrKf++dH+R6X1vOffkil1H709WxU+L8PQ9W2RX+lD+f6hzkVcd+rr+9X+uOex/+Av7xf650f5Io9R+8Y+SKPsn7x/Oe+5U+L8PQ999X6NPpP6hzjntof4C/vF/rjnsf+rr+9X+udJ+SqPsfxN+c+jZlH2Pefzj3Knxfh6D31fo0+k/qHNeex/6uv71f656Svj/1dPGov9c6UNn0vYE9DB0h/wC2n3RPPcqfF+HoPfV+jT6T+oVnkPzqiqK4RC7hlUOpv0bHcT1CWmrSVlKsoZToVIuCO0HfPSoBuAHcLT3NNOChFRRlq1PxJbzSWWCywVtW3pq2YqNFUUKihVGgUAAAdgG6ZYiTKxERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z",
   category: "",
  date: "April 19, 2020",
  title: "تمرين",
  url: ""
});
