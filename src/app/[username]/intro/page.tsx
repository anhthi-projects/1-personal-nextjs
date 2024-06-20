import { Button, Flex, GuyHackerIcon } from "@anhthi-projects/usy-ui";

import {
  AboutMeTypography,
  BriefIntroTypography,
  HiThereTypography,
  OutdoorActivitiesTypography,
} from "./page.styled";

const Intro = () => {
  const renderIntroAndReference = () => {
    return (
      <>
        <BriefIntroTypography size="medium" weight="bold">
          I&apos;m Thi Nguyen, and I like to code when having free time
        </BriefIntroTypography>
        <AboutMeTypography size="small">
          {`Integrity, Emotion, Innovation, and Giving are four key lifestyles I
        always chase. I'm Thi Nguyen, a senior developer who has 6 years of
        experience in software development. To me, every line of code must be
        optimized, maintainable, and easy to scale. I believe we're not only
        developers, we're also owners of products who understand and bring
        solutions to solve customer's problems`}
        </AboutMeTypography>
        <Flex display="inline-flex" gap="12px" margin="10px 0 0 0">
          <Button type="primary">Download CV</Button>
          <Button type="outline">View Github</Button>
        </Flex>
      </>
    );
  };

  return (
    <>
      <GuyHackerIcon width={80} height={80} />
      <HiThereTypography>Hi, there!</HiThereTypography>
      {renderIntroAndReference()}
      <OutdoorActivitiesTypography size="medium" weight="bold">
        Outdoor activities is the way to balance working and life
      </OutdoorActivitiesTypography>
    </>
  );
};

export default Intro;
