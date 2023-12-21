// Constructor - creating a Date object
const currentDate = new Date();

// Accessor Methods
const dayOfMonth = currentDate.getDate();
const dayOfWeek = currentDate.getDay();
const currentYear = currentDate.getFullYear();
const currentHour = currentDate.getHours();
const currentMilliseconds = currentDate.getMilliseconds();
const currentMinutes = currentDate.getMinutes();
const currentMonth = currentDate.getMonth();
const currentSeconds = currentDate.getSeconds();
const currentTimeInMilliseconds = currentDate.getTime();
const timezoneOffset = currentDate.getTimezoneOffset();
const utcDate = currentDate.getUTCDate();
const utcDay = currentDate.getUTCDay();
const utcFullYear = currentDate.getUTCFullYear();
const utcHours = currentDate.getUTCHours();
const utcMilliseconds = currentDate.getUTCMilliseconds();
const utcMinutes = currentDate.getUTCMinutes();
const utcMonth = currentDate.getUTCMonth();
const utcSeconds = currentDate.getUTCSeconds();

// Setter Methods
currentDate.setDate(10);
currentDate.setFullYear(2025);
currentDate.setHours(15);
currentDate.setMilliseconds(500);
currentDate.setMinutes(30);
currentDate.setMonth(6);
currentDate.setSeconds(45);
currentDate.setTime(1640990000000);
currentDate.setUTCDate(15);
currentDate.setUTCFullYear(2026);
currentDate.setUTCHours(12);
currentDate.setUTCMilliseconds(250);
currentDate.setUTCMinutes(20);
currentDate.setUTCMonth(11);
currentDate.setUTCSeconds(55);

// Conversion Methods
const dateString = currentDate.toDateString();
const isoString = currentDate.toISOString();
const jsonString = currentDate.toJSON();
const localeDateString = currentDate.toLocaleDateString();
const localeTimeString = currentDate.toLocaleTimeString();
const localeString = currentDate.toLocaleString();
const stringRepresentation = currentDate.toString();
const timeString = currentDate.toTimeString();
const utcString = currentDate.toUTCString();

// Displaying the results
console.log("Current Date:", currentDate);
console.log("Day of Month:", dayOfMonth);
console.log("Day of Week:", dayOfWeek);
console.log("Current Year:", currentYear);
console.log("Current Hour:", currentHour);
console.log("Current Milliseconds:", currentMilliseconds);
console.log("Current Minutes:", currentMinutes);
console.log("Current Month:", currentMonth);
console.log("Current Seconds:", currentSeconds);
console.log("Current Time in Milliseconds:", currentTimeInMilliseconds);
console.log("Timezone Offset:", timezoneOffset);
console.log("UTC Date:", utcDate);
console.log("UTC Day:", utcDay);
console.log("UTC Full Year:", utcFullYear);
console.log("UTC Hours:", utcHours);
console.log("UTC Milliseconds:", utcMilliseconds);
console.log("UTC Minutes:", utcMinutes);
console.log("UTC Month:", utcMonth);
console.log("UTC Seconds:", utcSeconds);
console.log("\nSetting Methods Applied:\n", currentDate);
console.log("\nDate after applying Conversion Methods:\n", dateString);
console.log(isoString);
console.log(jsonString);
console.log(localeDateString);
console.log(localeTimeString);
console.log(localeString);
console.log(stringRepresentation);
console.log(timeString);
console.log(utcString);
