import {
  BrandFacebookIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  BrandLinkedinIcon,
  SelectItemType,
} from "@anhthi-projects/usy-ui";

export type SocialNetworkValue = { name: string; url: string };

export const SocialNetworkItems: SelectItemType<SocialNetworkValue>[] = [
  {
    label: <BrandFacebookIcon />,
    value: {
      name: "facebook",
      url: "https://facebook.com",
    },
  },
  {
    label: <BrandLinkedinIcon />,
    value: {
      name: "linkedin",
      url: "https://www.linkedin.com/in",
    },
  },
  {
    label: <BrandGithubIcon />,
    value: { name: "github", url: "https://github.com" },
  },
  {
    label: <BrandInstagramIcon />,
    value: {
      name: "instagram",
      url: "https://www.instagram.com",
    },
  },
];
