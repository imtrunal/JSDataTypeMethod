// toFixed()
const toFixedNumber = 12.3456;
const fixedString = toFixedNumber.toFixed(2);
console.log(fixedString);

// toPrecision()
const toPrecisionNumber = 12345.6789;
const precisionString = toPrecisionNumber.toPrecision(5);
console.log(precisionString);

// toExponential()
const toExponentialNumber = 123.456;
const exponentialString = toExponentialNumber.toExponential(2);
console.log(exponentialString);

// parseInt()
const parseIntString = '123';
const parsedInt = parseInt(parseIntString, 10);
console.log(parsedInt);

// parseFloat()
const parseFloatString = '123.45';
const parsedFloat = parseFloat(parseFloatString);
console.log(parsedFloat);

// isNaN()
const nanValue = NaN;
console.log(isNaN(nanValue)); // true

// isFinite()
const finiteNumber = 42;
console.log(isFinite(finiteNumber)); // true

// valueOf()
const valueOfNumber = new Number(42);
const primitiveValue = valueOfNumber.valueOf();
console.log(primitiveValue);

// toString()
const toStringNumber = 42;
const binaryString = toStringNumber.toString(2);
console.log(binaryString);
