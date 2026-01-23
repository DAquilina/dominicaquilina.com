import { Page } from "./page";

export type HamburgerMenuState = {
  isOpen: boolean;
  pageMap: Map<string, Page>;
  targetIdStack: Array<string>;
};
