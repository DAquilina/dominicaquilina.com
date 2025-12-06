import { EMPLOYMENT_HISTORY } from "../constants/employment-history";
import { ElementIds } from "../enums/element-ids";
import { Skills } from "../enums/skills";
import { EmploymentHistoryItem } from "../types/employment-history-item";
import { Dom } from "../util/dom";
import { getMonthString } from "../util/helpers";

function _generateExperienceMarkup(): string {

  let output = "";

  EMPLOYMENT_HISTORY.forEach(
    (experienceItem: EmploymentHistoryItem) => {
      output += `
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
  )

  return output;
}

export function init(): void {

  Dom.injectHTML(ElementIds.ExperienceItems, _generateExperienceMarkup());
}
