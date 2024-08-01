import { Flex, Panel } from "@anhthi-projects/usy-ui";

import { ChangeUsername } from "@/app-pages/dashboard/profile/change-username";
import { UploadAvatar } from "@/app-pages/dashboard/profile/upload-avatar";
import { UploadCV } from "@/app-pages/dashboard/profile/upload-cv";
import { UserInfo } from "@/app-pages/dashboard/profile/user-info";

const Profile = () => {
  return (
    <Flex direction="row" gap="12px" wrap="wrap">
      <Flex grow={1} widthProps={{ minWidth: "300px" }}>
        <Panel title="User Profile" paddingProps={{ padding: "32px" }}>
          <UserInfo />
        </Panel>
      </Flex>
      <Flex
        direction="column"
        widthProps={{ width: "100%", maxWidth: "400px" }}
        gap="12px"
      >
        <Panel>
          <ChangeUsername />
        </Panel>
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
