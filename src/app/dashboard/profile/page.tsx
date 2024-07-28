import { Flex, Panel, usySpacing } from "@anhthi-projects/usy-ui";

import { UploadAvatar } from "@/app-pages/dashboard/profile/upload-avatar";
import { UploadCV } from "@/app-pages/dashboard/profile/upload-cv";
import { UserInfo } from "@/app-pages/dashboard/profile/user-info";

const Profile = () => {
  return (
    <Flex direction="row" gap="12px">
      <Flex grow={1}>
        <Panel paddingProps={{ padding: "32px", paddingTop: "70px" }}>
          <UserInfo />
        </Panel>
      </Flex>
      <Flex direction="column" width="500px" gap="12px">
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
