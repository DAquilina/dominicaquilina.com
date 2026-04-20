import { LinkType } from "../enums/link-type";

export type PortfolioItem = {
  altText: string;
  description: string;
  label: string;
  path: string;
  skills: Array<string>;
  type: LinkType;
};
