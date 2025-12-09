import { Script } from "./script";

export type Page = {
  canNavigate: boolean;
  children: Array<Page>;
  external?: boolean;
  excludeFromNav?: boolean;
  id?: string;
  label: string;
  path?: string;
  bootstrapFunction?: string;
  title?: string;
};
