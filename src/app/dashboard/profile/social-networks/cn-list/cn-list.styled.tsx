import { TrashBinIcon, usyColors } from "@usy-ui/themes";
import styled from "styled-components";

export const StyledTrashBinIcon = styled(TrashBinIcon)`
  cursor: pointer;

  path {
    stroke: ${usyColors.dark5};
  }
`;
