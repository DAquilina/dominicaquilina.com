import { HAMBURGER_ANIMATION_DEFAULTS } from "../constants/hamburger-animation-defaults";
import { HAMBURGER_ELEMENT_IDS } from "../constants/hamburger-element-ids";

export namespace SVG {
  /**
   * Dynamically adds the given stylesheet to the given SVG document
   */
  export async function embedStylesheetInSVG(svgRoot: Document, stylesheetPath: string) {

    const svgStylesheet = await fetch(stylesheetPath);

    let styleSheetText = await svgStylesheet.text();
    
    for (let key in HAMBURGER_ELEMENT_IDS) {
      styleSheetText = styleSheetText.replaceAll(`[${key}]`,`#${HAMBURGER_ELEMENT_IDS[key]}`);
    }

    styleSheetText = styleSheetText.replaceAll(`[burgerTranslationSize]`, `${HAMBURGER_ANIMATION_DEFAULTS.offset}px`);
    styleSheetText = styleSheetText.replaceAll(`[burgerTranslationDuration]`, `${HAMBURGER_ANIMATION_DEFAULTS.duration}ms`);
    
    const style = svgRoot.createElementNS("http://www.w3.org/2000/svg", "style");
    const node = svgRoot.createTextNode(styleSheetText);

    style.appendChild(node);

    // Append the style element to the SVG element
    svgRoot.querySelector("svg")!.appendChild(style);
  }


  export function toggleCSSClassOnSVGElement(svgRoot: Document, elementId: string, className: string) {

    svgRoot.querySelector(`#${elementId}`)?.classList.toggle(className);
  }
}
