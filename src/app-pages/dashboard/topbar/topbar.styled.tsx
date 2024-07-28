import { usySpacing } from "@anhthi-projects/usy-ui";
import styled from "styled-components";

export const TopBarContainer = styled.div`
  margin: ${usySpacing.px12} 0;
  padding-right: ${usySpacing.px16};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoggedUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${usySpacing.px16};
`;
