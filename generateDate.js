// Generate Date Library
const CurrentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const DateLibs = new Date("2024-08-29 07:00");

function generateUnixDate() {
  return DateLibs.valueOf();
}

function convertToUTC() {
  return DateLibs.toUTCString();
}

console.log(
  `Date (${CurrentTimezone}): ${DateLibs}\nDate (UTC): ${convertToUTC()}\nUNIX Value: ${generateUnixDate()}`
);
