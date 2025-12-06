import { LAST_UPDATED } from "../constants/last-updated";

import { ElementIds } from "../enums/element-ids";

import { Dom } from "../util/dom";


export function init(): void {

  Dom.injectHTML(ElementIds.LastUpdatedContentContainer, `Last Updated: ${LAST_UPDATED}`);
}
