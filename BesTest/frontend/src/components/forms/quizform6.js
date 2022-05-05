import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-pink-400 text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row `
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-gradient-to-r from-pink-400 to-pink-400 hover:from-gray-300 text-gray-100 hocus:bg-indigo-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block lg:ml-6 mt-6 lg:mt-0`

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({
  subheading = "Store Acess",
  heading = <>Feel free to <span tw="text-pink-400">get your gift</span><wbr/> </>,
  description = "your score points is the opportunity to get more and do more...",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,

  buttonRounded = true,
  primaryButtonText = "Store",
  primaryButtonUrl = "/components/innerPages/StorePage",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="https://c.tenor.com/s-wgG1LJrDQAAAAM/milk-and-mocha-cheer.gif" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Form action={formAction} method={formMethod}>
              
              
              <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
