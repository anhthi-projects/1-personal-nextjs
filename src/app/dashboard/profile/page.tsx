import { Flex, Panel } from "@anhthi-projects/usy-ui";

import { ChangeUsername } from "./change-username";
import { UploadAvatar } from "./upload-avatar";
import { UploadCV } from "./upload-cv";
import { UserInfo } from "./user-info";

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
