import { Button, Flex } from "@anhthi-projects/usy-ui";
import { signOut as nextAuthSignOut } from "next-auth/react";

import { useSignOutMutation } from "@/client-apis/auth/auth.api";

export const SignOut = () => {
  const [signOutMutation] = useSignOutMutation();

  const handleSignOut = () => {
    nextAuthSignOut();
    signOutMutation();
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Button variant="outline" onClick={handleSignOut}>
        Sign out
      </Button>
    </Flex>
  );
};
