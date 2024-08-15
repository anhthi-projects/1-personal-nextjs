"use client";
import { Typography, usyColors } from "@usy-ui/themes";
import styled from "styled-components";

export const HiThereTypography = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${usyColors.dark3};
  margin: 30px 0 25px;
`;

export const BriefIntroTypography = styled(Typography)`
  color: ${usyColors.dark1};
`;

export const AboutMeTypography = styled(Typography)`
  max-width: 800px;
  color: ${usyColors.dark6};
  line-height: 1.25rem;
`;

export const OutdoorActivitiesTypography = styled(Typography)`
  color: ${usyColors.dark1};
  margin: 50px 0 30px;
`;
