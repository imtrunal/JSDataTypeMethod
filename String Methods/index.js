// charAt()
const charAtExampleString = 'Hello, World!';
const charAtIndex = charAtExampleString.charAt(4);
console.log(charAtIndex);

// charCodeAt()
const charCodeAtExampleString = 'Hello, World!';
const charCode = charCodeAtExampleString.charCodeAt(1);
console.log(charCode);

// concat()
const concatExampleString1 = 'Hello, ';
const concatExampleString2 = 'World!';
const concatenatedString = concatExampleString1.concat(concatExampleString2);
console.log(concatenatedString);

// indexOf()
const indexOfExampleString = 'Hello, World!';
const index = indexOfExampleString.indexOf('World');
console.log(index);

// lastIndexOf()
const lastIndexOfExampleString = 'Hello, World!';
const lastIndex = lastIndexOfExampleString.lastIndexOf('o');
console.log(lastIndex);

// slice()
const sliceExampleString = 'Hello, World!';
const slicedString = sliceExampleString.slice(7, 12);
console.log(slicedString);

// substring()
const substringExampleString = 'Hello, World!';
const substring = substringExampleString.substring(7, 12);
console.log(substring);

// substr()
const substrExampleString = 'Hello, World!';
const substr = substrExampleString.substr(7, 5);
console.log(substr);

// replace()
const replaceExampleString = 'Hello, World!';
const replacedString = replaceExampleString.replace('World', 'Universe');
console.log(replacedString);

// toLowerCase()
const toLowerCaseExampleString = 'Hello, World!';
const lowerCaseString = toLowerCaseExampleString.toLowerCase();
console.log(lowerCaseString);

// toUpperCase()
const toUpperCaseExampleString = 'Hello, World!';
const upperCaseString = toUpperCaseExampleString.toUpperCase();
console.log(upperCaseString);

// trim()
const trimExampleString = '   Hello, World!   ';
const trimmedString = trimExampleString.trim();
console.log(trimmedString);

// padStart()
const padStartExampleString = '5';
const paddedStringStart = padStartExampleString.padStart(4, '0');
console.log(paddedStringStart);

// padEnd()
const padEndExampleString = '5';
const paddedStringEnd = padEndExampleString.padEnd(4, '0');
console.log(paddedStringEnd);

// split()
const splitExampleString = 'Hello, World!';
const splittedArray = splitExampleString.split(',');
console.log(splittedArray);

// includes()
const includesExampleString = 'Hello, World!';
const includesSubstring = includesExampleString.includes('Hello');
console.log(includesSubstring);

// startsWith()
const startsWithExampleString = 'Hello, World!';
const startsWithHello = startsWithExampleString.startsWith('Hello');
console.log(startsWithHello);

// endsWith()
const endsWithExampleString = 'Hello, World!';
const endsWithWorld = endsWithExampleString.endsWith('World!');
console.log(endsWithWorld);

// match()
const matchExampleString = 'Hello, World!';
const matchedArray = matchExampleString.match(/[A-Z]/g);
console.log(matchedArray);

// search()
const searchExampleString = 'Hello, World!';
const searchIndex = searchExampleString.search('World');
console.log(searchIndex);

// toString()
const toStringExampleString = 5;
const stringRepresentation = toStringExampleString.toString();
console.log(stringRepresentation);
