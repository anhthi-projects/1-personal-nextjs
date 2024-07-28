import { Typography, Avatar } from "@anhthi-projects/usy-ui";

import { LoggedUserContainer, TopBarContainer } from "./topbar.styled";

export const TopBar = () => {
  return (
    <TopBarContainer>
      <Typography>Hello! Thi</Typography>
      <LoggedUserContainer>
        <Typography>Jarvis Nguyen</Typography>
        <Avatar
          url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
          alt="Jarvis"
          size="small"
        />
      </LoggedUserContainer>
    </TopBarContainer>
  );
};
