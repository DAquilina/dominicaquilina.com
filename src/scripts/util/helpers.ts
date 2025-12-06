import { MONTHS } from "../constants/months";

/**
 * An async and waitable time delay
 */
export function delay(duration: number): Promise<void> {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve();
    }, duration);
  });
}

/**
 * Converts a relative URL into an absolute URL for use in fetch operations
 */
export function getAbsolutePath(path: string, location?: Location): string {

  const base = new URL((location ?? window.location).origin);

  return new URL(path.slice(path[0] === "/" ? 1 : 0), base).toString();
}


export function getMonthString(date: Date | "Present"): string {
  if (date === "Present") {
    return date;
  }
  
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}
