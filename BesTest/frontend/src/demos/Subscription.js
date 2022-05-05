import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/StudentListFullWidthWithImage.js";
import List from "components/pricing/ThreePlans.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <List />
    <Footer />
  </AnimationRevealPage>
);