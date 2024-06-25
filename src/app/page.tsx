import {
  Button,
  Input,
  Password,
  Toast,
  Typography,
} from "@anhthi-projects/usy-ui";

import {
  HomeContainer,
  Illustration,
  SidePanel,
  SignInFormContainer,
  SignUpLink,
} from "./page.styled";

const Home = () => {
  const renderSignInForm = () => {
    return (
      <>
        <Typography size="large" weight="bold">
          Sign In
        </Typography>
        <Input title="Username" />
        <Password title="Password" />
        <Button variant="primary">Sign In</Button>
        <Typography align="center">
          {`Don't have an account?`}
          {`  `}
          <SignUpLink href="sign-up">Sign Up</SignUpLink>
          <Toast />
        </Typography>
      </>
    );
  };

  return (
    <HomeContainer>
      <Illustration />
      <SidePanel>
        <SignInFormContainer>{renderSignInForm()}</SignInFormContainer>
      </SidePanel>
    </HomeContainer>
  );
};

export default Home;
