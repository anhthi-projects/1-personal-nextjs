"use client";
import {
  Avatar,
  Box,
  CaretDownIcon,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuOverlay,
  DropdownMenuTrigger,
  Flex,
  Typography,
  usySpacing,
} from "@anhthi-projects/usy-ui";
import { useSession } from "next-auth/react";

export const HiLoggedUser = () => {
  const { data: session } = useSession();

  const loggedUserName = session?.user ? session?.user.name : "loading...";
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingProps={{ padding: usySpacing.px20 }}
    >
      <Flex alignItems="center" gap="10px">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Typography noMargin>Hi, {loggedUserName}!</Typography>
          </DropdownMenuTrigger>
          <DropdownMenuOverlay>
            <DropdownMenuItem label="Change username" />
            <DropdownMenuItem label="Change password" />
            <DropdownMenuItem label="Sign out" />
          </DropdownMenuOverlay>
        </DropdownMenu>
      </Flex>
      <Box marginProps={{ marginTop: "32px" }}>
        <Avatar
          url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
          alt={loggedUserName}
          size="large"
        />
      </Box>
    </Flex>
  );
};
