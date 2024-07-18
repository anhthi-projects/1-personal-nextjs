import { Flex, Panel } from "@anhthi-projects/usy-ui";

const Profile = () => {
  return (
    <Flex direction="row" gap="12px">
      <Flex grow={1}>
        <Panel>Profile</Panel>
      </Flex>
      <Flex direction="column" width="500px" gap="12px">
        <Panel>Upload Avatar</Panel>
        <Panel>Upload CV</Panel>
      </Flex>
    </Flex>
  );
};

export default Profile;
