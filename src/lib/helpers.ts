export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInMadrid(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Madrid's time (UTC+7)
  const offsetMadrid = 7;
  now.setHours(now.getUTCHours() + offsetMadrid);

  return now;
}

export function formatTimeForMadrid(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit", 
    second: "2-digit",
    hour12: true,
    timeZone: "Europe/Madrid",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
  });
}

export function isMorningTime(timeString: string): boolean {
  return timeString.includes('AM');
}

export function getTimeThemeColor(date: Date): string {
  return isMorningTime(date) ? 'text-amber-400' : 'text-blue-400';
}
