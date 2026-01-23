import { HAMBURGER_ELEMENT_IDS } from "./hamburger-element-ids";

export const HAMBURGER_BACK_BUTTON = `
<a id="${HAMBURGER_ELEMENT_IDS.navigationBackButton}" href="#"
    class="${HAMBURGER_ELEMENT_IDS.navigationChildLink} back"
    title="Return to the previous page"
>
  <span class="ingredient-icon back"></span>
  <span class="navigation-child-label">Back</span>
</a>
`;
