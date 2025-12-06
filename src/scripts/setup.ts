import sitemap from "../assets/sitemap.json" with { type: "json" };

import { SOCIAL_MEDIA_ICONS } from "./constants/social-media-icons";

import { ElementIds } from "./enums/element-ids";

import { SocialMediaIcon } from "./types/social-media-icon";

import { Dom } from "./util/dom";
import { getAbsolutePath } from "./util/helpers";
import { Navigation } from "./util/navigation";


export function loadInitialView() {

  Navigation.loadSitemap(sitemap);

  Navigation.navigate(Navigation.getPage(window.location.pathname));

  window.onload = () => {

    Navigation.bootstrapNav();
  };
}


export function loadSocialMediaIcons() {

  let iconMarkup = "";

  Navigation.loadPartials(
    [
      getAbsolutePath(`/src/html/shared/social-media-icon.partial.html`, window.location)
    ]
  ).then(async ([socialMediaIconTemplate]) => {

    const template = await socialMediaIconTemplate.text();

    SOCIAL_MEDIA_ICONS.forEach((icon: SocialMediaIcon) => {

      iconMarkup += (template)
        .replaceAll("[label]", icon.label)
        .replaceAll("[url]", icon.path);
    });

    Dom.injectHTML(ElementIds.SocialMediaContentContainer, iconMarkup);
  });
}
