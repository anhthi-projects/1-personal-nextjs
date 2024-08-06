import { Flex, Panel } from "@anhthi-projects/usy-ui";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import { PhotoGallery } from "./photo-gallery";
import { SocialNetworks } from "./social-networks";
import { UploadAvatar } from "./upload-avatar";
import { UploadCV } from "./upload-cv";
import { UserInfo } from "./user-info";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Flex direction="row" gap="12px" wrap="wrap">
        <Flex grow={1} widthProps={{ minWidth: "300px" }}>
          <Panel title="User Profile" paddingProps={{ padding: "32px" }}>
            <UserInfo userData={session?.user} />
          </Panel>
        </Flex>
        <Flex
          direction="column"
          widthProps={{ width: "100%", maxWidth: "400px" }}
          gap="12px"
        >
          <Panel>
            <UploadCV />
          </Panel>
          <Panel>
            <SocialNetworks />
          </Panel>
        </Flex>
      </Flex>
      <Flex>
        <Panel
          title="Photo Gallery"
          paddingProps={{ padding: "32px" }}
          marginProps={{ marginTop: "32px" }}
        >
          <PhotoGallery />
        </Panel>
      </Flex>
    </>
  );
};

export default Profile;
