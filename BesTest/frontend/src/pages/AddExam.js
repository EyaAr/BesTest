import React, {useState, useEffect} from "react";
import Axios from "axios";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import logo from "images/logoBestest.png";
import illustration from "images/logoBestest.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { components } from "ComponentRenderer";
import Header from "components/headers/Teacherlight.js";


import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const Container = tw(ContainerBase)`min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-100 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-white`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;


const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-indigo-600 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-white text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default function AddExam ({
  
  logoLinkUrl = "/",
  headingText = "Wish to add  a new exam ?",
  submitButtonText = "Add exam",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  ParentsigninUrl = components.innerPages.AddLessonPage,
  roundedHeaderButton,
  

})  { 
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'));

    console.log(user._id);

    // setUser(user.id);
    setUser(JSON.parse(localStorage.getItem("user")));

  }, [])

const [title, setTitle] = useState("");
const [level, setLevel] = useState();
const [subject, setSubject] = useState("gtgtr");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("gtgtr");
  const [user, setUser] = useState();

const [images,setimages]=useState("")
const onChangeFile=e=>{
  setimages(e.target.files[0]);
}
  const Add = (e) =>{
    e.preventDefault();
    const formData=new FormData();
        formData.append("subject",subject);
        // formData.append("level",level);       

        formData.append("title",title);
        formData.append("price",price);
        formData.append("description",description);
        formData.append("type", images)

        // setSubject("")
        // setLevel("")
        // setTitle("")
        // setPrice("")
        // setDescription("")

Axios.post(`/examen/${user._id}`,formData);
       alert("Exam added successfully")
};
return (
  <>
<Header roundedHeaderButton={roundedHeaderButton} 

/>
  <AnimationRevealPage>
    <Container >
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              
                <p tw="mt-6 text-xs text-gray-600 text-center">Fill up the following form to submit your request for a new exam ! </p><br/>
              <Form  onSubmit={(e) => Add(e)}  enctype="multipart/form-data">
              <Input type="text" placeholder="Title" onChange={(event)=>{
                setTitle(event.target.value);
               }}
               />
              <Input type="text" placeholder="Description" onChange={(event)=>{
                setDescription(event.target.value);
               }} />
              
                
                {/* <Combobox  tw="w-full rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0">
                <ComboboxInput tw="w-full px-8 py-4 rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" 
                placeholder="Level"
                />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="3 Class">
           <ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="4 Class">
           <ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="5 Class">
          <ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="6 Class">
        <ComboboxOptionText />
          </ComboboxOption>
          
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>  


                <Combobox tw="w-full rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0">
                <ComboboxInput tw="w-full px-8 py-4 rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" 
                placeholder="Subject"
                />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="Mathematique">
          📙 <ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="Arabic">
          📘 <ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="French">
          📗<ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="English">
          📒<ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="Social science">
          📔<ComboboxOptionText />
          </ComboboxOption>
          <ComboboxOption value="Sciences of life and earth">
          📙<ComboboxOptionText />
          </ComboboxOption>
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>      */}

            {/* <div className="u-s-m-b-30">
                  <select tw="  text-gray-500  w-full px-8 py-4 rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" className="select-box select-box--primary-style u-w-100" name='level'value={level}           onChange={(event)=>{
                       setLevel(event.target.value);
                       }}
                        id="level">
                       <option tw="text-gray-200">Level</option>
                       <option value="3 class">3 class</option>
                       <option value="4 class">4 class</option>
                       <option value="5 class">5 class</option>
                       <option value="6 class">6 class</option>


                  </select>
          
            </div>
     */}
            <div className="u-s-m-b-30">
                  <select tw="text-gray-500 w-full px-8 py-4 rounded-lg font-medium bg-purple-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" className="select-box select-box--primary-style u-w-100" name='subject'value={subject}           onChange={(event)=>{
                  setSubject(event.target.value);
                 }} id="subject">
                    <option tw="text-gray-200">Subject</option>
                    <option value="Mathematique">📙Mathematique</option>
                   <option value="Arabic">📘 Arabic</option>
                   <option value="French">📗 French</option>
                   <option value="English">📒 English</option>
                   <option value="Social science">📔 Social science</option>
                   <option value="Sciences of life and earth">📙 Sciences of life and earth</option>



                    </select>
                    
            </div>

    <Input type="number" placeholder="Price" onChange={(event)=>{
                setPrice(event.target.value);
               }}
               />
    <Input type="file" placeholder="file" onChange={(e) =>onChangeFile(e)} name='type'
     />

                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                <a href={ParentsigninUrl.url} tw="border-b border-gray-500 border-dotted">
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc="https://content.presentermedia.com/content/animsp/00022000/22511/scribbles_teaching_student_300_wht.gif"/>
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
  </>
)}