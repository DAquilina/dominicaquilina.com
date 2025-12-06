import { EmploymentTypes } from "../enums/employment-types";
import { ScheduleTypes } from "../enums/schedule-types";
import { SeniorityLevels } from "../enums/seniority-levels";
import { Skills } from "../enums/skills";

export type EmploymentHistoryItem = {
  company: string;
  companyUrl: string;
  dateStart: Date;
  dateEnd: Date | "Present";
  description: Array<string>;
  jobTitle: string;
  location: string;
  schedule: ScheduleTypes;
  seniority: SeniorityLevels;
  skills: Array<Skills>;
  type: EmploymentTypes;
};
