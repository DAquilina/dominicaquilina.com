import { PORTFOLIO_ITEMS } from "../constants/portfolio-items";
import { ElementIds } from "../enums/element-ids";
import { Dom } from "../util/dom";

export namespace Portfolio {
  export function renderPortfolioItems(): void {

    let markup = "";

    // <em class="skill-chip">SKILL_NAME]</em>
    // <a href="https://github.com/DAquilina/algorithm-practice" target="_blank" class="link"><span class="sr-only">Go to the Algorithm Practice project page on GitHub</span></a>

    Dom.injectHTML(ElementIds.PortfolioItems, markup);
  }
}
