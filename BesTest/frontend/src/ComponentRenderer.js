import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import TeacherLessonsPage from"demos/TeacherLessonsPageArabic.js";
import TeacherExercicesPage from"demos/TeacherExercicesPageArabic.js";
import TeacherExamsPage from"demos/TeacherExamsPageArabic.js";
import SubscriptionPage from"demos/Subscription.js";

import TeacherLessonsPageMaths from"demos/TeacherLessonsPageMaths";
import TeacherExercicesPageMaths from"demos/TeacherExercicesPageMaths";
import TeacherExamsPageMaths from"demos/TeacherExamsPageMaths.js";

import TeacherLessonsPageFrench from"demos/TeacherLessonsPageFrench";
import TeacherExercicesPageFrench from"demos/TeacherExercicesPageFrench";
import TeacherExamsPageFrench from"demos/TeacherExamsPageFrench";

import TeacherLessonsPageEnglish from"demos/TeacherLessonsPageEnglish";
import TeacherExercicesPageEnglish from"demos/TeacherExercicesPageEnglish";
import TeacherExamsPageEnglish from"demos/TeacherExamsPageEnglish";

import TeacherLessonsPageSLE from"demos/TeacherLessonsPageSLE";
import TeacherExercicesPageSLE from"demos/TeacherExercicesPageSLE";
import TeacherExamsPageSLE from"demos/TeacherExamsPageSLE";

import TeacherLessonsPageSS from"demos/TeacherLessonsPageSS";
import TeacherExercicesPageSS from"demos/TeacherExercicesPageSS";
import TeacherExamsPageSS from"demos/TeacherExamsPageSS";

import StudentListPage from"demos/StudentListForTeacher.js";

import ListOfTeachers from"pages/ListOfTeachers.js";
import listkids from"demos/listKids.js";
import EventLandingPage from "demos/EventLandingPage.js";
import ArabicLandingPage from "demos/ArabicLandingPage.js";
import MathematicsLandingPage from "demos/MathematicsLandingPage.js";
import FrenchLandingPage from "demos/FrenchLandingPage.js";
import EnglishLandingPage from "demos/EnglishLandingPage.js";
import SciencesOfLifeAndEarthLandingPage from "demos/SciencesOfLifeAndEarthLandingPage.js";
import SocialSciencesLandingPage from "demos/SocialSciencesLandingPage.js";
import ComingSoonLandingPage from 'demos/ComingSoon.js';
import ComingSoon1LandingPage from 'demos/ComingSoon.js';



import AgencyLandingPage from "demos/AgencyLandingPage.js";
import ParentLandingPage from "demos/ParentLandingPage.js";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import ServiceLandingPage from "demos/ServiceLandingPage.js";
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

import EventLandingPageImageSrc from "images/demo/EventLandingPage.jpeg";
import HotelTravelLandingPageImageSrc from "images/demo/HotelTravelLandingPage.jpeg";
import AgencyLandingPageImageSrc from "images/demo/AgencyLandingPage.jpeg";
import SaaSProductLandingPageImageSrc from "images/demo/SaaSProductLandingPage.jpeg";

import LessonExercicePage from"pages/LessonExercice.js";
import SocialLessonsPage from "pages/SocialLessons.js";
import SciencesPage from "pages/Sciences.js"
import EnglishPage from "pages/English.js";
import LessonsPage from "pages/Lessons.js";
import FrenchLessonsPage from "pages/FrenchLessons.js"
import MathLessonsPage from "pages/MathLessons.js"
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";

import RestaurantLandingPageImageSrc from "images/demo/RestaurantLandingPage.jpg";
import ServiceLandingPageImageSrc from "images/demo/ServiceLandingPage.jpeg";
import HostingCloudLandingPageImageSrc from "images/demo/HostingCloudLandingPage.jpeg";


import AdminLoginPage from "pages/AdminLogin.js";
import TeacherLoginPage from "pages/TeacherLogin.js";
import TeacherSignupPage from "pages/TeacherSignup.js";
import ParentLoginPage from "pages/ParentLogin.js";
import ParentSignupPage from "pages/ParentSignup.js";
import KidLoginPage from "pages/KidLogin.js";
import KidSignupPage from "pages/AddKid";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import HomeExercicePage from "pages/HomeExercice.js";
import ArabicExercicePage from "pages/ArabicExercice.js";
import FrenchExercicePage from "pages/FrenchExercice.js";
import EnglishExercicePage from "pages/EnglishExercice.js";
import MathematicExercicePage from "pages/MathematicExercice.js";
import ScienceExercicePage from "pages/ScienceExercice.js";
import SocialExercicePage from "pages/SocialExercice.js";
import ListExams from"exams/ListExams.js";
import arabicExams from"exams/ArabicExams.js";
import mathExams from"exams/MathExams.js";
import frenchExams from"exams/FrenchExams.js";
import englishExams from"exams/EnglishExams.js";
import scienceofearthExam from"exams/ScienceofearthExam.js";
import socialExams from"exams/SocialExams.js";
import addExamPage from"pages/AddExam.js";
import addLessonPage from "pages/AddLesson.js";
import addExercicePage from"pages/addExercice.js";
import ArabicLevelsPage from"demos/ArabicLevelsPage.js";
import MathematicsLevelsPage from"demos/MathematicsLevelsPage.js";
import FrenchLevelsPage from"demos/FrenchLevelsPage.js";
import EnglishLevelsPage from"demos/EnglishLevelsPage.js";
import SciencesOfLifeAndEarthLevelsPage from"demos/SciencesOfLifeAndEarthLevelsPage.js";
import SocialSciencesLevelsPage from"demos/SocialSciencesLevelsPage.js";

import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import ComingSoonImageSrc from"images/demo/ComingSoon.jpg";
import ComingSoon1ImageSrc from"images/demo/ComingSoon.jpg";
import AdminLoginPageImageSrc from "images/demo/LoginPage.jpeg";
import TeacherLoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "components/hero/ArabicFullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "components/hero/TwoColumnWithPrimaryBackground.js";

import TwoPlansWithDurationSwitcherPricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "components/pricing/ThreePlans.js";

import ThreeColWithSideImageFeatures from "components/features/ThreeColWithSideImage.js";
import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "components/cards/ArabicThreeColSlider.js";
import TrendingCards from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js"
import ThreeColContactDetailsCards from "components/cards/ThreeColContactDetails.js"

import ThreeColSimpleWithImageBlog from "components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "components/testimonials/SimplePrimaryBackground.js";

import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";
import SingleColFAQS from "components/faqs/SingleCol.js";
import TwoColumnPrimaryBackgroundFAQS from "components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

import GetStartedCTA from "components/cta/GetStarted.js";
import GetStartedLightCTA from "components/cta/GetStartedLight.js";
import DownloadAppCTA from "components/cta/DownloadApp.js";

import SimpleFiveColumnFooter from "components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "components/footers/FiveColumnDark.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";
import ForgotPassword from 'pages/ForgotPassword';

import quiz3Page from "pages/quiz3";
import quiz4Page from 'pages/quiz4';
import quiz5Page from 'pages/quiz5';
import quiz6Page from 'pages/quiz6';
import quizHomePage from'demos/quizHome';
import StorePage from'pages/Store';
import QRCodePage from'pages/QRCode';


export const components = {
  landingPages: {
    RestaurantLandingPage: {
      component: RestaurantLandingPage,
      imageSrc: RestaurantLandingPageImageSrc,
      url: "/components/landingPages/RestaurantLandingPage",
    },
    ComingSoonLandingPage: {
      component: ComingSoonLandingPage,
      imageSrc: ComingSoonImageSrc,
      url: "/components/landingPages/ComingSoonLandingPage",
    },
    ComingSoon1LandingPage: {
      component: ComingSoonLandingPage,
      imageSrc: ComingSoon1ImageSrc,
      url: "/components/landingPages/ComingSoonLandingPage",
    },
    
  },

  innerPages: {
    SubscriptionPage: {
      component: SubscriptionPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/SubscriptionPage",
    },
    TeacherLessonsPage: {
      component: TeacherLessonsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPage",
    },
    TeacherExercicesPage: {
      component: TeacherExercicesPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPage",
    },
    TeacherExamsPage: {
      component: TeacherExamsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPage",
    },
    TeacherLessonsPageMaths: {
      component: TeacherLessonsPageMaths,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPageMaths",
    },
    TeacherExercicesPageMaths: {
      component: TeacherExercicesPageMaths,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPageMaths",
    },
    TeacherExamsPageMaths: {
      component: TeacherExamsPageMaths,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPageMaths",
    },
    
    TeacherLessonsPageFrench: {
      component: TeacherLessonsPageFrench,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPageFrench",
    },
    TeacherExercicesPageFrench: {
      component: TeacherExercicesPageFrench,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPageFrench",
    },
    TeacherExamsPageFrench: {
      component: TeacherExamsPageFrench,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPageFrench",
    },

    TeacherLessonsPageEnglish: {
      component: TeacherLessonsPageEnglish,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPageEnglish",
    },
    TeacherExercicesPageEnglish: {
      component: TeacherExercicesPageEnglish,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPageEnglish",
    },
    TeacherExamsPageEnglish: {
      component: TeacherExamsPageEnglish,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPageEnglish",
    },

    TeacherLessonsPageSLE: {
      component: TeacherLessonsPageSLE,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPageSLE",
    },
    TeacherExercicesPageSLE: {
      component: TeacherExercicesPageSLE,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPageSLE",
    },
    TeacherExamsPageSLE: {
      component: TeacherExamsPageSLE,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPageSLE",
    },

    TeacherLessonsPageSS: {
      component: TeacherLessonsPageSS,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherLessonsPageSS",
    },
    TeacherExercicesPageSS: {
      component: TeacherExercicesPageSS,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExercicesPageSS",
    },
    TeacherExamsPageSS: {
      component: TeacherExamsPageSS,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/TeacherExamsPageSS",
    },

    SocialSciencesLevelsPage: {
      component: SocialSciencesLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/SocialSciencesLevelsPage",
    },
    SciencesOfLifeAndEarthLevelsPage: {
      component: SciencesOfLifeAndEarthLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/SciencesOfLifeAndEarthLevelsPage",
    },
    EnglishLevelsPage: {
      component: EnglishLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/EnglishLevelsPage",
    },
    FrenchLevelsPage: {
      component: FrenchLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/FrenchLevelsPage",
    },
    MathematicsLevelsPage: {
      component: MathematicsLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/MathematicsLevelsPage",
    },
    ArabicLevelsPage: {
      component: ArabicLevelsPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/ArabicLevelsPage",
    },
    quizHomePage: {
      component: quizHomePage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/quizHomePage",
    },
    ArabicLandingPage: {
      component: ArabicLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/ArabicLandingPage",
    },
    MathematicsLandingPage: {
      component: MathematicsLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/MathematicsLandingPage",
    },
    FrenchLandingPage: {
      component: FrenchLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/FrenchLandingPage",
    },
    EnglishLandingPage: {
      component: EnglishLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/EnglishLandingPage",
    },
    SciencesOfLifeAndEarthLandingPage: {
      component: SciencesOfLifeAndEarthLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/SciencesOfLifeAndEarthLandingPage",
    }, 
    SocialSciencesLandingPage: {
      component: SocialSciencesLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/innerPages/SocialSciencesLandingPage",
    },  
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
    },
    AdminLoginPage: {
      component: AdminLoginPage,
      imageSrc: AdminLoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/AdminLoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
    },
    // ForgotPasswordPage: {
    //   component: ForgotPassword,
    //   url: `/components/innerPages/ForgotPassword`,
    // },
    TeacherLoginPage: {
      component: TeacherLoginPage,
      imageSrc: TeacherLoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/TeacherLoginPage",
    },
    TeacherSignupPage: {
      component: TeacherSignupPage,
      url: `/components/innerPages/TeacherSignupPage`,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
    },
    ParentLoginPage: {
      component: ParentLoginPage,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/ParentLoginPage",
    },
    ParentSignupPage: {
      component: ParentSignupPage,
      url: `/components/innerPages/ParentSignupPage`,
      scrollAnimationDisabled: true,
    },
    KidLoginPage: {
      component: KidLoginPage,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/KidLoginPage",
    },
    KidSignupPage: {
      component: KidSignupPage,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/KidSignupPage",
    },
    PricingPage: {
      component: PricingPage,
      url: `/components/innerPages/PricingPage`,
      imageSrc: PricingPageImageSrc,
    },
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
      imageSrc: AboutUsPageImageSrc,
    },
    quiz3Page: {
      component: quiz3Page,
      url: `/components/innerPages/quiz3Page`,
      
    },

    quiz4Page: {
      component: quiz4Page,
      url: `/components/innerPages/quiz4Page`,
      
    },
    quiz5Page: {
      component: quiz5Page,
      url: `/components/innerPages/quiz5Page`,
      
    },

    quiz6Page: {
      component: quiz6Page,
      url: `/components/innerPages/quiz6Page`,
      
    },
    StorePage: {
      component: StorePage,
      url: `/components/innerPages/StorePage`,
      
    },
    QRCodePage: {
      component: QRCodePage,
      url: `/components/innerPages/QRCodePage`,
      
    },
    ContactUsPage: {
      component: ContactUsPage,
      url: `/components/innerPages/ContactUsPage`,
      imageSrc: ContactUsPageImageSrc,
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: `/components/innerPages/BlogIndexPage`,
      imageSrc: BlogIndexPageImageSrc,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
      imageSrc: TermsOfServicePageImageSrc,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    HomeExercicePage: {
      component: HomeExercicePage,
      url: `/components/innerPages/HomeExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    ArabicExercicePage: {
      component: ArabicExercicePage,
      url: `/components/innerPages/ArabicExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    FrenchExercicePage: {
      component: FrenchExercicePage,
      url: `/components/innerPages/FrenchExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    EnglishExercicePage: {
      component: EnglishExercicePage,
      url: `/components/innerPages/EnglishExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    MathematicExercicePage: {
      component: MathematicExercicePage,
      url: `/components/innerPages/MathematicExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    ScienceExercicePage: {
      component: ScienceExercicePage,
      url: `/components/innerPages/ScienceExercicePage`,
    },
    LessonsPage: {
      component: LessonsPage,
      url: `/components/innerPages/LessonsPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    SocialExercicePage: {
      component: SocialExercicePage,
      url: `/components/innerPages/SocialExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    ListExams: {
      component: ListExams,
      url: `/components/innerPages/ListExams`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    arabicExams: {
      component: arabicExams,
      url: `/components/innerPages/arabicExams`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    mathExams: {
      component: mathExams,
      url: `/components/innerPages/mathExams`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    frenchExams: {
      component: frenchExams,
      url: `/components/innerPages/frenchExams`,
    },
    FrenchLessonsPage: {
      component: FrenchLessonsPage,
      url: `/components/innerPages/FrenchLessonsPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    scienceofearthExam: {
      component: scienceofearthExam,
      url: `/components/innerPages/scienceofearthExam`,
    },
    englishExams: {
      component: englishExams,
      url: `/components/innerPages/englishExams`,
    },
    MathLessonsPage: {
      component: MathLessonsPage,
      url: `/components/innerPages/MathLessonsPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    scienceofearthExam: {
      component: scienceofearthExam,
      url: `/components/innerPages/scienceofearthExam`,
    },
    EnglishPage: {
      component: EnglishPage,
      url: `/components/innerPages/EnglishPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    socialExams: {
      component: socialExams,
      url: `/components/innerPages/socialExams`,
    },
    SciencesPage: {
      component: SciencesPage,
      url: `/components/innerPages/SciencesPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    SocialLessonsPage: {
      component: SocialLessonsPage,
      url: `/components/innerPages/SocialLessonsPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    AddLessonPage: {
      component: addLessonPage,
      url: `/components/innerPages/AddLessonPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    AddExamPage: {
      component: addExamPage,
      url: `/components/innerPages/AddExamPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
    addExercicePage: {
      component: addExercicePage,
      url: `/components/innerPages/addExercicePage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    },
        ListOfTeachers: {
          component: ListOfTeachers,
          url: `/components/innerPages/ListOfTeachers`,
          imageSrc: PrivacyPolicyPageImageSrc,
        },
        
        listkids: {
          component: listkids,
          imageSrc: HotelTravelLandingPageImageSrc,
          url: "/components/innerPages/listkids",
        },
        StudentListPage: {
          component: StudentListPage,
          imageSrc: HotelTravelLandingPageImageSrc,
          url: "/components/innerPages/StudentListPage",
        },
        LessonExercicePage: {
          component: LessonExercicePage,
          imageSrc: HotelTravelLandingPageImageSrc,
          url: "/components/innerPages/LessonExercicePage",
        },
  },

  blocks: {
    /* Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },
    Pricing: {
      type: "Pricing Section",
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: "Two Plans With Duration Switcher",
          component: TwoPlansWithDurationSwitcherPricing,
          url: "/components/blocks/Pricing/TwoPlansWithDurationSwitcher",
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
        ThreePlans: {
          name: "Simple Three Plans",
          component: ThreePlansPricing,
          url: "/components/blocks/Pricing/ThreePlans",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Three Column With Side Image",
          component: ThreeColWithSideImageFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImage",
        },
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/components/blocks/Features/ThreeColSimple",
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: "Three Column With Side Image With Primary Background",
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
        },
        TwoColHorizontalWithButton: {
          name: "Two Column With Button and Horizonatal Features with Icon",
          component: TwoColHorizontalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColHorizontalWithButton",
        },
        TwoColVerticalWithButton: {
          name: "Two Column With Vertical Features and Button",
          component: TwoColVerticalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColVerticalWithButton",
        },
        WithStepsAndImage: {
          name: "Steps with Image",
          component: WithStepsAndImageFeatures,
          url: "/components/blocks/Features/WithStepsAndImage",
        },
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: "Three Column With Centered Stats on Primary Background",
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
        },
        WithStatsAndImage: {
          name: "Stats With Image",
          component: WithStatsAndImageFeatures,
          url: "/components/blocks/Features/WithStatsAndImage",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        Portfolio: {
          name: "Two Column Portfolio Cards With Images ",
          component: PortfolioCards,
          url: "/components/blocks/Cards/Portfolio",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/components/blocks/Cards/ThreeColContactDetails",
        },
        Trending: {
          name: "Two Trending Preview Cards With Images",
          component: TrendingCards,
          url: "/components/blocks/Cards/Trending",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        GridWithFeaturedPost: {
          name: "Grid With Featured Post",
          component: GridWithFeaturedPostBlog,
          url: "/components/blocks/Blog/GridWithFeaturedPost",
        },
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/components/blocks/Blog/PopularAndRecentPosts",
        },
        ThreeColSimpleWithImage: {
          name: "Simple Three Column With Image",
          component: ThreeColSimpleWithImageBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImage",
        },
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      } 
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImage",
        },
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
        TwoColumnWithImageAndRating: {
          name: "Two Column With Image And Rating",
          component: TwoColumnWithImageAndRatingTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndRating",
        },
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
        },
        SimplePrimaryBackground: {
          name: "Simple With Primary Background",
          component: SimplePrimaryBackgroundTestimonial,
          url: "/components/blocks/Testimonial/SimplePrimaryBackground",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
        SingleCol: {
          name: "Single Column",
          component: SingleColFAQS,
          url: "/components/blocks/FAQS/SingleCol",
        },
        TwoColumnPrimaryBackground: {
          name: "Two Column With Primary Background",
          component: TwoColumnPrimaryBackgroundFAQS,
          url: "/components/blocks/FAQS/TwoColumnPrimaryBackground",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/components/blocks/Form/SimpleContactUs",
        },
        SimpleSubscribeNewsletter: {
          name: "Simple Subscribe newsletter",
          component: SimpleSubscribeNewsletterForm,
          url: "/components/blocks/Form/SimpleSubscribeNewsletter",
        },
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/components/blocks/Form/TwoColContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started",
          component: GetStartedCTA,
          url: "/components/blocks/CTA/GetStarted",
        },
        GetStartedLight: {
          name: "Get Started Light",
          component: GetStartedLightCTA,
          url: "/components/blocks/CTA/GetStartedLight",
        },
        DownloadApp: {
          name: "Download App",
          component: DownloadAppCTA,
          url: "/components/blocks/CTA/DownloadApp",
        },
      }
    },
*/
    Footer: {
      type: "Footers Section",
      elements: {
        /*SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/components/blocks/Footer/FiveColumnWithInputForm",
        },
        FiveColumnWithBackground: {
          name: "Five Column With background",
          component: FiveColumnWithBackgroundFooter,
          url: "/components/blocks/Footer/FiveColumnWithBackground",
        },
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/components/blocks/Footer/FiveColumnDark",
        },*/
        MiniCentered: {
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
