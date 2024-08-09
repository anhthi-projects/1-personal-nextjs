import { Flex, Panel, PanelTitle } from "@anhthi-projects/usy-ui";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getSocialNetworkByUserId } from "@/client-apis/social-networks/social-networks.fetch";

import { PhotoGallery } from "./photo-gallery";
import { SocialNetworks } from "./social-networks";
import { UploadCV } from "./upload-cv";
import { UserInfo } from "./user-info";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  const { data: socialNetworks } = await getSocialNetworkByUserId(
    session?.user.id || ""
  );

  return (
    <>
      <Flex direction="row" gap="12px" wrap="wrap">
        <Flex grow={1} widthProps={{ minWidth: "300px" }}>
          <Panel
            title={<PanelTitle title="User Profile" size="extra-large" />}
            paddingProps={{ padding: "32px" }}
          >
            <UserInfo userData={session?.user} />
          </Panel>
        </Flex>
        <Flex
          direction="column"
          widthProps={{ width: "100%", maxWidth: "400px" }}
          gap="12px"
        >
          <Panel title={<PanelTitle title="Upload CV" size="medium" />}>
            <UploadCV />
          </Panel>
          <Panel title={<PanelTitle title="Social Networks" size="medium" />}>
            <SocialNetworks socialNetworks={socialNetworks} />
          </Panel>
        </Flex>
      </Flex>
      <Flex>
        <Panel
          title={<PanelTitle title="Photo Gallery" size="extra-large" />}
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
