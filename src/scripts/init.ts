import { loadInitialView, loadSocialMediaIcons } from "./setup";

import { LAST_UPDATED } from "./constants/last-updated";

import { ElementIds } from "./enums/element-ids";

import { Dom } from "./util/dom";

window.onload = () => {

  loadInitialView();
  loadSocialMediaIcons();
}
