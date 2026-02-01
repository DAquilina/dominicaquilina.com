import sitemap from "../../assets/sitemap.hamburger-menu.json" with { type: "json" };

import { HAMBURGER_ANIMATION_DEFAULTS } from "../constants/hamburger-animation-defaults";
import { HAMBURGER_BACK_BUTTON } from "../constants/hamburger-back-button";
import { HAMBURGER_ELEMENT_IDS } from "../constants/hamburger-element-ids";
import { HAMBURGER_INGREDIENTS } from "../constants/hamburger-ingredients";

import { HamburgerMenuState } from "../types/hamburger-menu-state";
import { Page } from "../types/page";

import { delay } from "../util/helpers";
import { Dom } from "../util/dom";
import { SVG } from "../util/svg";


export namespace HamburgerMenu {
  export const state: HamburgerMenuState = {
    isOpen: false,
    pageMap: new Map<string, Page>(),
    targetIdStack: []
  };


  async function distributeNavItems(): Promise<void> {

    return new Promise(async (resolve) => {

      await delay(10);

      const items = document.querySelectorAll(`.${HAMBURGER_ELEMENT_IDS.navigationChildLink}`);
      const interval = (2 * Math.PI)/items.length;
      let angle;

      items.forEach((item, index) => {

        angle = (index * interval);

        item.setAttribute(
          "style",
          `opacity: 1.0; ` +
          `transform-origin: center; ` +
          `transform: scale(1.0) ` + 
            `translate(calc(${HAMBURGER_ANIMATION_DEFAULTS.radius * Math.cos(angle)}px - 50%), ` +
                      `calc(${HAMBURGER_ANIMATION_DEFAULTS.radius * Math.sin(angle)}px - 50%));` +
          `--i: ${index}`
        );

        if (item.id === HAMBURGER_ELEMENT_IDS.navigationBackButton) {
          item.addEventListener("click", goBack);
        }
        else {
          item.addEventListener("click", () => {

            selectNavItem(item.id, item.hasAttribute("data-navigate"));
          });
        }
      });
    });
  }


  function generateMenuMarkup(targetPage: Page): string {

    let outputHtml = "";
    let lastIngredient: string;
    let ingredientsCopy = [...HAMBURGER_INGREDIENTS];

    (targetPage.children || []).forEach((item: Page) => {
      if (item.excludeFromNav) {
        return true;
      }

      lastIngredient = ingredientsCopy[Math.floor(ingredientsCopy.length * Math.random())];

      ingredientsCopy = ingredientsCopy.filter((ingredient: string) => {

        return ingredient !== lastIngredient;
      });

      outputHtml += `
<a href="#" id="${item.id}"
    ${!item.children?.length ? "data-navigate" : ""}
    title="${item.label}: ${item.title}"
    class="${HAMBURGER_ELEMENT_IDS.navigationChildLink}"
>
  <span class="ingredient-icon ${lastIngredient}"></span>
  <span class="navigation-child-link-label">${item.label}</span>
</a>
      `;
    });

    if (state.targetIdStack.length > 1) {
      outputHtml += HAMBURGER_BACK_BUTTON;
    }

    return outputHtml;
  }


  function generatePageMap(page: Page): void {

    state.pageMap.set(page.id!, page);

    if (page.children.length) {
      page.children.forEach(
        (child: Page) => {
          generatePageMap(child);
        }
      );
    }
  }


  export function goBack(): void {

    state.targetIdStack = state.targetIdStack.slice(0, state.targetIdStack.length - 1);

    selectNavItem(state.targetIdStack[state.targetIdStack.length - 1], false);
  }


  function handleNavItemSelected(targetPage: Page): void {

    alert(`You selected ${targetPage.label}!`);
  }


  async function hideNavItems(): Promise<void> {

    return new Promise(async (resolve) => {

      const items = document.querySelectorAll(`.${HAMBURGER_ELEMENT_IDS.navigationChildLink}`);

      items.forEach((item, index) => {

        item.setAttribute("style", "");
      });

      await delay(HAMBURGER_ANIMATION_DEFAULTS.duration);

      resolve();
    });
  }


  export function selectNavItem(targetPageId: string, navigate: boolean): void {

    const targetPage: Page | undefined = state.pageMap.get(targetPageId);

    if (targetPage) {
      if (navigate) {
        handleNavItemSelected(targetPage);
      }
      else {
        hideNavItems().then(() => {

          if (!state.targetIdStack.includes(targetPageId)) {
            state.targetIdStack.push(targetPageId);
          }

          Dom.injectHTML(
            HAMBURGER_ELEMENT_IDS.navigationChildren,
            generateMenuMarkup(targetPage)
          );

          distributeNavItems();
        });
      }
    }
  }


  export async function setup(): Promise<void> {

    generatePageMap(sitemap);

    const svgRoot = (document.getElementById(HAMBURGER_ELEMENT_IDS.navigationTrigger) as HTMLObjectElement).contentDocument;

    if (svgRoot) {
      let svgContent = svgRoot.querySelector(`${HAMBURGER_ELEMENT_IDS.hamburgerWrapper}`);

      // Need to ensure that the SVG is rendered
      while (!svgContent) {
        await delay(10);

        svgContent = svgRoot.querySelector(`#${HAMBURGER_ELEMENT_IDS.hamburgerWrapper}`);
      }

      svgContent.addEventListener(
        "click",
        () => {

          toggleHamburgerMenuState(!state.isOpen);
        }
      );

      SVG.embedStylesheetInSVG(svgRoot, `/hamburger-menu/hamburger-menu.embed.css`);
    }
  }


  export function toggleHamburgerMenuState(targetState: boolean): void {

    if (state.isOpen !== targetState) {
      const svgRoot: Document = (document.getElementById(HAMBURGER_ELEMENT_IDS.navigationTrigger) as HTMLObjectElement).contentDocument!;

      SVG.toggleCSSClassOnSVGElement(svgRoot!, HAMBURGER_ELEMENT_IDS.hamburgerWrapper, "open");
      Dom.toggleCSSClassOnElement(HAMBURGER_ELEMENT_IDS.navigation, "open");

      state.isOpen = targetState;

      if (state.isOpen) {
        selectNavItem("root", false);
      }
      else {
        state.targetIdStack = [];
      }
    }
  }
}
