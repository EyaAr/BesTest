import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-pink-400 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Quiz",
  description = "The excellent way to test knowledge and boost intelligence .",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  const questions = [
    {
      questionText: 'How many legs does a spider have?',
      answerOptions: [
        { answerText: 'Seven', isCorrect: false },
        { answerText: 'Five', isCorrect: false },
        { answerText: 'Eight', isCorrect: true },
        { answerText: 'Twelve', isCorrect: false },
      ],
    },
    {
      questionText: '3 / 9 = ?',
      answerOptions: [
        { answerText: '0', isCorrect: false },
        { answerText: '30', isCorrect: false },
        { answerText: '1/3', isCorrect: true },
        { answerText: '39', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Van Gogh', isCorrect: false },
        { answerText: 'Leonardo DaVinci', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Rembrandt', isCorrect: false },
      ],
    },
    {
      questionText: '70 / ? = 2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '0', isCorrect: false },
        { answerText: '35', isCorrect: true },
        { answerText: '7', isCorrect: false },
      ],
    },
    {
      questionText: 'How many days are in a year?',
      answerOptions: [
        { answerText: '365', isCorrect: true },
        { answerText: '300', isCorrect: false },
        { answerText: '356', isCorrect: false },
        { answerText: '366', isCorrect: false },
      ],
    },
    {
      questionText: '1200 / 60 = ?',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '12', isCorrect: false },
        { answerText: '20', isCorrect: true },
        { answerText: '2', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the tallest mountain in the world?',
      answerOptions: [
        { answerText: 'Sabinio', isCorrect: false },
        { answerText: 'Mount Bamba', isCorrect: false },
        { answerText: 'Mount Cameroon', isCorrect: false },
        { answerText: 'Mount Everest', isCorrect: true },
      ],
    },
    {
      questionText: 'The Statue of Liberty came from which country to the United States?',
      answerOptions: [
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'France', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: '350 * 25 = ?',
      answerOptions: [
        { answerText: '560', isCorrect: false },
        { answerText: '3525', isCorrect: false },
        { answerText: '8750', isCorrect: true },
        { answerText: '8770', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the hardest natural substance?',
      answerOptions: [
        { answerText: 'A diamond', isCorrect: true },
        { answerText: 'A mercury', isCorrect: false },
        { answerText: 'Gold', isCorrect: false },
        { answerText: 'Silver', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);

    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              <br></br>
              <br></br>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <Question>


                <div className='app'>
                  <br></br>
                  <br></br>
                  <br></br>


                  {showScore ? (
                    <QuestionText>
                      <div className='score-section'>
                        <br></br>
                        You scored {score} out of {questions.length}
                      </div>
                    </QuestionText>

                  ) : (
                    <>
                      <div className='question-section'>

                        <div className='question-count' >
                          <br></br>
                          <QuestionText>
                            <span >Question {currentQuestion + 1}</span>/{questions.length}
                          </QuestionText>
                        </div>
                        <QuestionText>
                          <br></br>
                          <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </QuestionText>

                      </div>

                      <div className='answer-section'>
                        <br></br>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                          
                            <QuestionToggleIcon>
                              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

                            </QuestionToggleIcon>
                        ))}
                          
                      </div>

                    </>

                  )}
                </div>
              </Question>

            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
}