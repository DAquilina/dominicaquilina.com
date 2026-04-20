import { PORTFOLIO_ITEMS } from "../constants/portfolio-items";

import { ElementIds } from "../enums/element-ids";
import { LinkType } from "../enums/link-type";

import { PortfolioItem } from "../types/portfolio-item";

import { Dom } from "../util/dom";
import { delay, getAbsolutePath } from "../util/helpers";
import { Navigation } from "../util/navigation";

export namespace Portfolio {
  export function renderPortfolioItems(): void {

    Navigation.loadPartials(
      [
        getAbsolutePath(`/src/html/shared/portfolio-item.partial.html`, window.location)
      ]
    ).then(async ([portfolioItemTemplate]) => {

      const template = await portfolioItemTemplate.text();

      let itemsMarkup = "";

      PORTFOLIO_ITEMS.forEach((item: PortfolioItem) => {

        itemsMarkup += (template)
          .replaceAll("[label]", item.label)
          .replaceAll("[description]", item.description)
          .replaceAll("[skills]", _generateSkillChipsMarkup(item))
          .replaceAll("[link]", _generatePortfolioItemLinkMarkup(item));
      });

      Dom.injectHTML(ElementIds.PortfolioItems, itemsMarkup);
    });
  }

  function _generatePortfolioItemLinkMarkup(item: PortfolioItem): string {

    let linkMarkup = `<a href="`;

    if (item.type === LinkType.External) {
      linkMarkup += `${item.path}" target="_blank"`
    }
    else {
      linkMarkup += `${getAbsolutePath(item.path, window.location)}"`;
    }

    if (item.type === LinkType.Download) {
      linkMarkup += " download";
    }

    linkMarkup += ` class="link" title="${item.altText}" aria-describedby="${item.altText}"></a>`;

    return linkMarkup;
  }

  function _generateSkillChipsMarkup(item: PortfolioItem): string {

    return item.skills.map((skill: string) => {

      return `<em class="chip">${skill}</em>`;
    }).join("\n");
  }
}
