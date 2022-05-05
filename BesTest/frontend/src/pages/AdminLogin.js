import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/logoBestest.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Link, Redirect } from "react-router-dom";
import { loadUser, login } from "../Actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ParentSignup from "./ParentSignup";
import { USER_LOADED } from "Actions/Types";
import user from "../Reducers/auth";
import axios from "axios";
import { useHistory} from "react-router-dom";
// import {Link} from 'react-router-dom'
const Container = tw( 
  ContainerBase
)`min-h-screen bg-gradient-to-b from-primary-100 to-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

function AdminLogin({
  logoLinkUrl = "/",
  illustrationImageSrc = illustration,
  headingText = "Sign In To Your Account",
  submitButtonText = "Login",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  // login,
  isAuthenticated,
}) {
  let history = useHistory();
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;
  const [errors, setErrors] = useState([]);
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    // login(email, password);
    loginFetch(email, password);
  };

  const loginFetch = async (email, password) => {
    try {
      const result = await axios.post("/users/signin", { email, password });
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", result.data.token);
      if (result.data.user.typeuser === "TEACHER") {
        history.push("/TeacherLandingPage");
      }
      if (result.data.user.typeuser === "PARENT") {
        history.push("/ParentLandingPage");
      }

      if (result.data.user.typeuser === "STUDENT") {
        history.push("/components/landingPages/RestaurantLandingPage");
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  if (isAuthenticated && user !== null && user.typeuser == "Parent") {
    return (
      <Redirect
        to={{
          pathname: "/parentlandingPage",
          state: { Parent: user.typeuser },
        }}
      />
    );

    return (
      <Redirect
        to={{
          pathname: "/teacherlandingPage",
          state: { Teacher: user.typeuser },
        }}
      />
    );
  }

  //   else if (isAuthenticated && ParentSignup.user!== null && user.typeuser ==='Parent') {
  //     return <Redirect to='/parentLandingPage' />
  //   }
  //  else if (isAuthenticated && ParentSignup.user!== null && user.typeuser ==='Teacher') {
  //     return <Redirect to='/teacherLandingPage' />
  //   }

  if (isAuthenticated && user !== null) {
    return <Redirect to="/teacherLandingPage" />;
  }

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  Please provide your unique code in order to access your
                  account !
                </p>
                <Form onSubmit={(e) => onsubmit(e)}>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => hundelchange(e)}
                    required
                    placeholder="Email"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    minLength="6"
                    required
                    onChange={(e) => hundelchange(e)}
                  />
                  {/* <input type="submit" value ="login "/> */}
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
                {errors.length != 0 ? (
                  <p tw="mt-6 text-xs text-red-600 text-center">
                    <span
                      tw="border-red-500"
                      style={{ fontSize: "15px", color: " red" }}
                    >
                      {errors[0].msg}
                    </span>
                  </p>
                ) : null}
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <Link
                    // href={forgotPLinksswordUrl}
                    to="/ForgotPassword"
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Forgot Password ?
                  </Link>
                </p>

                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a
                    href="../innerPages/ParentSignupPage"
                    tw="border-b border-gray-500 border-dotted"
                  >
                    creer un compte
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
}
AdminLogin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(AdminLogin);
