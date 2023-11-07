// Generate UNIX Date Library
const ComputerTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const DateLibs = new Date("2023-11-08 10:00");

function generateUnixDate() {
  return DateLibs.valueOf();
}

function convertToUTC() {
  return DateLibs.toUTCString();
}

console.log(
  `Date (${ComputerTimezone}): ${DateLibs}\nDate (UTC): ${convertToUTC()}\nUNIX Value: ${generateUnixDate()}`
);
