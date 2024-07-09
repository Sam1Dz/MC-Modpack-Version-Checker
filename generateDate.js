// Generate Date Library
const CurrentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const DateLibs = new Date("2024-07-10 04:30");

function generateUnixDate() {
  return DateLibs.valueOf();
}

function convertToUTC() {
  return DateLibs.toUTCString();
}

console.log(
  `Date (${CurrentTimezone}): ${DateLibs}\nDate (UTC): ${convertToUTC()}\nUNIX Value: ${generateUnixDate()}`
);
