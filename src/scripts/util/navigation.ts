import { Dom } from "./dom";
import { delay, getAbsolutePath } from "./helpers";

import { ElementIds } from "../enums/element-ids";

import { Page } from "../types/page";
import { Script } from "../types/script";
import { Setup } from "../setup";


export namespace Navigation {

  export let navigationMarkup: string;

  export const pageMap: Map<string, Page> = new Map<string, Page>();

  export function bootstrapNav(): void {

    Dom.injectHTML(ElementIds.Navigation, navigationMarkup);

    // Select all navigable nav links and attach the navigate event to them
    const nodes = document.querySelectorAll(`${ElementIds.Navigation} a`);

    nodes.forEach((node: Element) => {

      node.addEventListener("click", (event: Event) => {

        event.preventDefault();

        try {
          navigate(getPage((event.target! as HTMLElement).getAttribute("data-target")!));
        }
        catch (error) {
          navigate(getPage("404"));
        }
      });
    });
  }

  export function getPage(pathname: string): Page {
    let resolvedPath = pathname === "/" ? "home" : pathname;

    if (resolvedPath[0] === "/") {
      resolvedPath = resolvedPath.slice(1);
    }

    const targetPage = pageMap.get(resolvedPath);

    if (!targetPage) {
      throw new Error(`The path ${pathname} (resolved to ${resolvedPath}) did not resolve to a known page.`);
    }

    return targetPage;
  }

  export function loadPage(page: Page){

    Dom.toggleAttributeOnElement("body", "data-loading");

    loadPartials(
      [getAbsolutePath(`/src/html/routes/${page.id}.partial.html`)]
    ).then(
      async ([targetHtml]) => {

        new MutationObserver(
          async (mutationList, observer) => {

            Dom.setAttributeOnElement("content", "data-route", page.id!);

            while (document.readyState !== "complete") {
              await delay(10);
            }

            if (page.bootstrapFunction) {
              Setup[page.bootstrapFunction as keyof typeof Setup]?.();
            }

            Navigation.bootstrapNav();

            observer.disconnect();
          }
        ).observe(
          document.getElementById("content") as Node,
          { childList: true }
        );

        Dom.toggleAttributeOnElement("body", "data-loading");

        Dom.injectHTML(ElementIds.MainContentContainer, await targetHtml.text());
      },
      async () => {

      }
    );
  }


  export async function loadPartials(paths: Array<string>): Promise<Array<Response>> {

    return Promise.all(
      paths.map((path) => {
        return fetch(path);
      })
    );
  }


  export async function loadSitemap(root: Page): Promise<void> {

    navigationMarkup = _generateNavMarkup(root.children);

    _generatePageMap(root);
  }


  export function navigate(targetPage: Page) {

    loadPage(targetPage);

    _updateUrl(targetPage);
    _updateTitle(targetPage);
  }


  /**
   * Creates a tree of navigation markup for injecting into a nav container when a partial is loaded.
   * 
   * Note that this will generate an empty tree if a node is node excluded but all of its children are.
   */
  function _generateNavMarkup(pages: Array<Page>): string {
    let output: string = "<ul>";

    pages.forEach((page: Page) => {
      if (!page.excludeFromNav) {

        let tagName = page.canNavigate ? `a role="button" href="${page.path}" data-target="${page.path?.split("/").pop()}"` : "span";

        if (page.canNavigate && page.external) {
          tagName += ` target="_blank"`;
        }

        output +=
`<li>
  <${tagName}>
    ${page.label}
  </${tagName}>

  ${page.children?.length ? _generateNavMarkup(page.children) : ""}
</li>`;
      }
    });

    output += "</ul>";

    return output;
  }


  function _generatePageMap(page: Page): void {

    const resolvedPage = Object.assign(
      {},
      page,
      {
        id: ((page.canNavigate && !page.external) ? page.path!.split("/").pop() : page.label.toLowerCase()) || "home"
      }
    );

    pageMap.set(resolvedPage.id!, resolvedPage);

    if (page.children.length) {
      page.children.forEach(
        (child: Page) => {
          _generatePageMap(child);
        }
      );
    }
  }

  function _updateTitle(page: Page): void {
    if (page.title) {
      document.title = page.title;
    }
  }

  function _updateUrl(page: Page): void {

    if (!window.location.pathname.includes(page.path || "")) {
      const path = getAbsolutePath(page.path!);

      window.location.href = path;

      window.history.pushState({ page: page.id }, path);
    }
  }
}
