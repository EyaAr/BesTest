import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({ 
  subheading = "RESSOURCES MANAGEMENT",
  heading = <>Add your <span tw="text-primary-500">Ressources</span></>,
  description = "We always do our best to help you manage your ressrouces is the most efficient way possible, here you can add new ressources for your students.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://img.freepik.com/vecteurs-libre/livre-ouvert-lumiere-mystique-plume_149267-3.jpg",
      author: "You",
      category: "Lessons",
      title: "Add new lessons",
      description: "Here you will be able to upload new lessons for your students to check and then follow up with exercices and exams.",
      url: "/components/innerPages/AddLessonPage"
    },
    {
      imageSrc:
        "https://img.freepik.com/vecteurs-libre/livre-ouvert-lumiere-mystique-plume_149267-37.jpg?size=338&ext=jpg",
      author: "You",
      category: "Exercices",
      title: "Add new exercices",
      description: "Here you can upload new exercices to check your student's levels of understanding and act accordingly.",
      url: "/components/innerPages/addExercicePage"
    },
    {
      imageSrc:
        "https://img.freepik.com/vektoren-kostenlos/offenes-buch-mit-mystisch-hellem-licht_149267-819.jpg?size=338&ext=jpg",
      author: "You",
      category: "Exams",
      title: "Add new exams",
      description: "Here you can upload new exams to test your students and provide feedback for their parents based on their results.",
      url: "/components/innerPages/AddExamPage"
    }
  ];
  return (
    <Container id="ressources">
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Add</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
