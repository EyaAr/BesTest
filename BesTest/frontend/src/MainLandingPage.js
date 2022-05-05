import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

import heroScreenshotImageSrc from "images/banner-img.png";
import cutePic from "images/1.gif";
import logo from "images/logoBestest.png";
import Features from "components/features/DashedBorderSixFeatures";
import Footer from "components/footers/MainMiniCenteredFooter.js";
import Chat from"components/Chat";
import './App.css';
/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-gradient-to-r from-primary-100 to-primary-500 hover:from-pink-300 hover:to-pink-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;

const navlink1 = tw.a`px-8 py-3 font-bold rounded bg-gradient-to-r from-primary-100 to-primary-500 hover:from-pink-300 hover:to-pink-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const primaryNav = tw(
  navlink1
)`mt-6 sm:mt-12 sm:ml-8`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-gradient-to-r from-primary-100 to-primary-500 hover:from-pink-300 hover:to-pink-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)`mt-6 sm:mt-12 sm:ml-8`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;


const ComponentsContainer = tw.div`mt-24`;
const Components = tw.div``;
const Component = tw.div`mt-12 border rounded-lg bg-white`;
const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;






export default ({
  features = null,
  // teacherButtonText = "Teacher",
  // parentButtonText = "Parent",
  // kidButtonText = "Kid",
  buttonRoundedCss = "",
  adminLogin = components.innerPages.AdminLoginPage,
  teacherLogin = components.innerPages.TeacherLoginPage,
  parentLogin = components.innerPages.ParentLoginPage,
  kidLogin = components.innerPages.KidLoginPage,
  blocks = components.blocks,
  heading = "Whatever the problems, Be part of BesTest",
  description = "Our new innovative approach for a better online education including teachers, kids and also parents.",
  role ="Let us know who you are !"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };



  features = features || [
    `High quality lessons`,
    `Quizzes`,
    `Exercices`,
    "Exams",
    "Parent-teacher direct communication",
    "Catch-up sessions"
  ];

  return (
    <AnimationRevealPage enabled>
      <Container tw="bg-gradient-to-b from-indigo-100 via-pink-500 to-purple-500 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              BesTest
            </LogoLink><img src={cutePic} width="150"/>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              <NavLink target="_blank" href="#aboutProject">
                About our project
              </NavLink>
              <NavLink target="_blank" href="#aboutTeam">
                About the team
              </NavLink>
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink href={adminLogin.url}> 
                 Login
              </PrimaryNavLink>
            </div>
            
          </NavRow>
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <br/>
              {/* <Description>{role}</Description> */}
              <Actions>
                {/* <primaryNav href={teacherLogin.url} css={buttonRoundedCss}>
                  {teacherButtonText}
                </primaryNav>
                <primaryNav href={parentLogin.url} css={buttonRoundedCss}>
                  {parentButtonText}
                </primaryNav>
                <primaryNav href={kidLogin.url} css={buttonRoundedCss}>
                  {kidButtonText}
                </primaryNav> */}
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <Features id="Services" />
          <SectionContainer  id="aboutProject">
            <SectionHeading>About our project</SectionHeading>
            <SectionDescription tw="text-white">
            Welcome to BesTest web application dedicated for kids in El Fekir school currently enrolling between the 3rd and 6th primary grade in which they will be able to consult the list of lessons, exams and exercises provided by their teachers and also get involved in activities that pushes them to invest more in the application by providing them with fun side activities and getting rewarded with score points along the way depending on their state of completion of activities that will allow them to unlock more themes and more exciting activities. 
            The teacher will also have the opportunity to organize online catch-up sessions by hosting real time video calls with their students.
            The parent will also have the ability to organize private catch-up sessions for his kids in our site.
            </SectionDescription>
          </SectionContainer>

          <SectionContainer id="aboutTeam">
            <SectionHeading>Cool As Code</SectionHeading>
            <SectionDescription tw="text-white" >
              We are a group of engineering students that are fond of developping innovative web applications and are happy to present to you this sollution for 
              a better e-learning experience for everyone involved in the process for online studies including parents.
              We hope you like our services and would very much appreciate your feedback ♥
            </SectionDescription>
            
            <Chat/>
          </SectionContainer>
          
        </Content2Xl>
      
        <Footer/>
      </Container>
      
    </AnimationRevealPage>
  );
};

