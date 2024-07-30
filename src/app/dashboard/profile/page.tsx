import { Flex, Panel } from "@anhthi-projects/usy-ui";

import { UploadAvatar } from "@/app-pages/dashboard/profile/upload-avatar";
import { UploadCV } from "@/app-pages/dashboard/profile/upload-cv";
import { UserInfo } from "@/app-pages/dashboard/profile/user-info";

const Profile = () => {
  return (
    <Flex direction="row" gap="12px">
      <Flex grow={1}>
        <Panel title="User Profile" paddingProps={{ padding: "32px" }}>
          <UserInfo />
        </Panel>
      </Flex>
      <Flex direction="column" width="400px" gap="12px">
        <Panel>
          <UploadAvatar />
        </Panel>
        <Panel>
          <UploadCV />
        </Panel>
      </Flex>
    </Flex>
  );
};

export default Profile;
