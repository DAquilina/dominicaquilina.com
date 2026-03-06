import { HEX_MARGIN } from "../constants/hex-margin";
import { HEX_SIZE } from "../constants/hex-size";
import { HOME_ELEMENT_IDS } from "../constants/home-element-ids";
import { Dom } from "../util/dom";

export namespace Home {
  export function generateHexMarkup(): void {

    const {height, width} = Dom.getElementDimensions(HOME_ELEMENT_IDS.container);

    // https://en.wikipedia.org/wiki/Hexagon
    // R = horizontal diameter = HEX_SIZE, r = horizontal diameter
    // R = r / cos(30deg) [0.86602540378]
    const r = HEX_SIZE / Math.cos(Math.PI / 6);

    // Given that we know that HEX_SIZE is the hexagon's width, we can use the properties of a right-angled triangle to determine the height
    // of the top and bottom angled pieces. The target angle is determined using the fact that a triangle has a sum total of 180 degrees for its
    // internal angles and that a hexagon's internal angles are all 120 degrees.

    // Internal angles = 120 - 30 - 30
    // Height = HEX_SIZE * Tan(30deg) / 2

    const vDiff = (HEX_SIZE / 2) * Math.tan(Math.PI / 6); // For radians, Pi = 180 degrees, so 30 degrees = Pi/6
    const vSize = r - vDiff;

    // This accounts for the last element not having additional margin
    const xCount = (window.innerWidth / (HEX_SIZE + HEX_MARGIN)) + (HEX_MARGIN / (HEX_SIZE + HEX_MARGIN));

    // To give it a bit more visual interest, we're going to arbitrarily add a few rows to either side
    const yCount = (height / (vSize + HEX_MARGIN)) + 8;

    // If the second row is wider than the first row (i.e. the second row protrudes due to the remaining space being less than HEX_SIZE),
    // then we need to adjust the hex count to account for the overlap 
    const overlap = ((xCount % 1) > 0.5) ? 0 : Math.floor(yCount / 2);

    const totalHexCount = (Math.floor(xCount) * Math.floor(yCount)) - overlap;

    Dom.clearHTML(HOME_ELEMENT_IDS.hexContainer);
    Dom.injectHTML(
      HOME_ELEMENT_IDS.hexContainer,
      new Array(totalHexCount).fill("").map(
        () => {
          return `<div class="${HOME_ELEMENT_IDS.hexItem}" style="animation: fade-in var(--transition-timing-default) ${Math.random() * 2 * totalHexCount}ms var(--transition-function-default) forwards;"></div>`
        }
      ).join("")
    );
  }
}
