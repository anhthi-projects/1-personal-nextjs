import {
  Button,
  Flex,
  GuyHackerIcon,
  ImageGallery,
} from "@anhthi-projects/usy-ui";

import { getUserByUsername } from "@/client-apis/users/users.fetch";

import {
  AboutMeTypography,
  BriefIntroTypography,
  HiThereTypography,
  OutdoorActivitiesTypography,
} from "./page.styled";

const Intro = async ({ params }: any) => {
  const { data, error } = await getUserByUsername(params.username);

  console.log("Intro", data);
  console.log("Intro", error);

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
          <Button variant="primary">Download CV</Button>
          <Button variant="outline">View Github</Button>
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
      <ImageGallery
        images={[
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wonderful_Nature_Beauty.jpg/2560px-Wonderful_Nature_Beauty.jpg",
            shape: "big",
          },
          {
            url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
            shape: "normal",
          },
          {
            url: "https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shape: "wide",
          },
          {
            url: "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            shape: "normal",
          },
          {
            url: "https://images.unsplash.com/photo-1449867727329-3294ea016353?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shape: "tall",
          },
        ]}
      />
    </>
  );
};

export default Intro;
