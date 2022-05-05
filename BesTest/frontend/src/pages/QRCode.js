import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { components } from "ComponentRenderer.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Blog from "components/blogs/StoreBlog.js";

import Footer from "components/footers/MiniCenteredFooter.js";
import Header from "components/headers/Ressourceslight.js";



import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';



const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
    tw`w-full xl:w-5/12`,
    props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

const HighlightedText = tw.span`text-primary-500`

const PrimaryButton = styled(PrimaryButtonBase)(props => [
    tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`
]);



export default ({
    subheading = "You QR Code is available",
    headingHtmlComponent = (
        <>
            Congratulation <span tw="text-primary-500">Enjoy!!!!!</span>
        </>
    ),
    description = "Take a screenshot and get your gift",
    linkText = "View ",
    cardLinkText = "Read More",
    textOnLeft = false,


    buttonRounded = true,
    primaryButtonText = "Get It",
    primaryButtonUrl = "/components/innerPages/QRCodePage",




}) => {



    return (
        <>
        <Container tw="bg-gradient-to-b from-pink-200  via-white to-pink-200 relative -mx-8 -mt-8 pt-8 px-8">
        <Header/>

            <Content >


                <ThreeColumn>
                    <HeadingColumn textOnLeft={textOnLeft}>
                        <HeadingInfoContainer>

                            <Subheading>{subheading}</Subheading>
                            <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
                            <HeadingDescription>{description}</HeadingDescription>



                        </HeadingInfoContainer>
                    </HeadingColumn>

                </ThreeColumn>

               <br/><br/><br/><br/><br/>
                <QRCodeSVG   value="https://reactjs.org/" />
               


            </Content>
            <Footer />
        </Container>
        </>
    );
};
