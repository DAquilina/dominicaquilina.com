import { LinkType } from "../enums/link-type";

export type Page = {
  bootstrapFunction?: string;
  canNavigate: boolean;
  children: Array<Page>;
  description?: string;
  excludeFromNav?: boolean;
  id?: string;
  label: string;
  path?: string;
  title?: string;
  type: LinkType | string;
};
