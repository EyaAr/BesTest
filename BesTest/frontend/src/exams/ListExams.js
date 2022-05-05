import TabGrid from "components/cards/TabCardGrid.js";
import TabCardGridExams from "components/cards/TabCardGridExams";
import tw from "twin.macro";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";


export default () => {
   
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
    return (
<TabCardGridExams
heading={
  <>
    Checkout our <HighlightedText>Exams</HighlightedText>
  </>
}
/>);}