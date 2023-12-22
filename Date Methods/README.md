# JavaScript Date Object Methods Usage

This code demonstrates the usage of different accessor methods, setter methods, and conversion methods available in the JavaScript `Date` object.

## Accessor Methods

Accessor methods retrieve specific date and time components from a `Date` object:

- `.getDate()`: Retrieves the day of the month.
- `.getDay()`: Retrieves the day of the week.
- `.getFullYear()`: Retrieves the year.
- `.getHours()`: Retrieves the hour.
- `.getMilliseconds()`: Retrieves the milliseconds.
- `.getMinutes()`: Retrieves the minutes.
- `.getMonth()`: Retrieves the month.
- `.getSeconds()`: Retrieves the seconds.
- `.getTime()`: Retrieves the time in milliseconds since January 1, 1970.
- `.getTimezoneOffset()`: Retrieves the difference in minutes between the local time zone and UTC.
- `.getUTCDate()`, `.getUTCDay()`, `.getUTCFullYear()`, and others: Retrieve UTC-specific date and time components.

## Setter Methods

Setter methods modify specific date and time components in a `Date` object:

- `.setDate()`: Sets the day of the month.
- `.setFullYear()`: Sets the year.
- `.setHours()`: Sets the hour.
- `.setMilliseconds()`: Sets the milliseconds.
- `.setMinutes()`: Sets the minutes.
- `.setMonth()`: Sets the month.
- `.setSeconds()`: Sets the seconds.
- `.setTime()`: Sets the time in milliseconds since January 1, 1970.
- `.setUTCDate()`, `.setUTCFullYear()`, `.setUTCHours()`, and others: Set UTC-specific date and time components.

## Conversion Methods

Conversion methods transform a `Date` object into different string representations:

- `.toDateString()`: Converts the date portion to a string.
- `.toISOString()`: Converts the date to a string in ISO format.
- `.toJSON()`: Converts the date to a string in JSON format.
- `.toLocaleDateString()`, `.toLocaleTimeString()`, `.toLocaleString()`: Converts to locale-specific date and time strings.
- `.toString()`: Converts to a string representation.
- `.toTimeString()`: Converts the time portion to a string.
- `.toUTCString()`: Converts the date to a string using UTC time.

