import sitemap from "../assets/sitemap.json" with { type: "json" };

import { EMPLOYMENT_HISTORY } from "./constants/employment-history";
import { LAST_UPDATED } from "./constants/last-updated";
import { SOCIAL_MEDIA_ICONS } from "./constants/social-media-icons";

import { ElementIds } from "./enums/element-ids";
import { Skills } from "./enums/skills";
import { HamburgerMenu } from "./showcase/hamburger-menu";
import { Home } from "./showcase/home";
import { EmploymentHistoryItem } from "./types/employment-history-item";

import { SocialMediaIcon } from "./types/social-media-icon";

import { Dom } from "./util/dom";
import { clearDebounce, debounce, getAbsolutePath, getMonthString } from "./util/helpers";
import { Navigation } from "./util/navigation";


export namespace Setup {
  export function loadInitialView() {

    Navigation.loadSitemap(sitemap);

    try {
      if (!window.location.pathname.match(/assets\//i)) {
        Navigation.navigate(Navigation.getPage(window.location.pathname));
      }
    }
    catch (error) {
      Navigation.navigate(Navigation.getPage("404"));
    }

    document.onload = () => {

      Navigation.bootstrapNav();
    };

    window.addEventListener("unload", () => {
      clearDebounce();
    });
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


  export function bootstrapExperience(): void {

    let markup = "";
    
    EMPLOYMENT_HISTORY.forEach(
      (experienceItem: EmploymentHistoryItem) => {
        markup += `
<div class="experience-item">
  <h3><a target="_blank" href="${experienceItem.companyUrl}">${experienceItem.company}</a></h3>
  <div class="job-title">${experienceItem.jobTitle}</div>
  <div class="experience-period">${getMonthString(experienceItem.dateStart)} - ${getMonthString(experienceItem.dateEnd)}</div>
  <div class="skills">
    ${
      experienceItem.skills.map(
        (skill: Skills) => {

          return `<span class="chip">${skill}</span>`;
        }
      ).join(" ")
    }
  </div>
  <ul>
    ${
      experienceItem.description.map(
        (entry: string) => {

          return `<li>${entry}</li>`;
        }
      ).join(" ")
    }
  </ul>
</div>`
      }
    );

    Dom.injectHTML(ElementIds.ExperienceItems, markup);
  }


  export function bootstrapHamburgerMenu(): void {

    void HamburgerMenu.setup();
  }


  export function bootstrapHome(): void {

    setTimeout(() => {
      Home.generateHexMarkup();
    }, 300);

    window.addEventListener("resize", () => {
      debounce(Home.generateHexMarkup);
    });

    Dom.injectHTML(ElementIds.LastUpdatedContentContainer, `Last Updated: ${LAST_UPDATED}`);
  }


  export function bootstrapPortfolio(): void {
    
  }
}
