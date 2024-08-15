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
} from "@usy-ui/themes";
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";

import { useSignOutMutation } from "@/client-apis/auth/auth.api";

export const HiLoggedUser = () => {
  const { data: session } = useSession();
  const [signOutMutation] = useSignOutMutation();

  const handleSignOut = () => {
    nextAuthSignOut();
    signOutMutation();
  };

  const loggedUserName = session?.user ? session?.user.name : "loading...";
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingProps={{ padding: `${usySpacing.px24} ${usySpacing.px20}` }}
    >
      <Flex justifyContent="space-between" alignItems="center" gap="10px">
        <Avatar
          url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
          alt={loggedUserName}
          variant="circle"
          size="small"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Typography size="small" noMargin>
              Hi, {loggedUserName}!
            </Typography>
          </DropdownMenuTrigger>
          <DropdownMenuOverlay>
            <DropdownMenuItem label="Change password" />
            <DropdownMenuItem label="Sign out" onClick={handleSignOut} />
          </DropdownMenuOverlay>
        </DropdownMenu>
      </Flex>
    </Flex>
  );
};
