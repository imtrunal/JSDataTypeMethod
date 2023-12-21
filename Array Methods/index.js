// forEach()
const forEachExampleArray = [1, 2, 3, 4, 5];
forEachExampleArray.forEach(element => {
  console.log("element:",element);
});

// map()
const mapExampleArray = [1, 2, 3, 4, 5];
const mappedArray = mapExampleArray.map(element => {
  return element * 2;
});
// console.log("mappedArray:",mappedArray);

// filter()
const filterExampleArray = [1, 2, 3, 4, 5];
const filteredArray = filterExampleArray.filter(element => {
  return element > 3;
});
// console.log("filteredArray:",filteredArray);

// reduce()
const reduceExampleArray = [1, 2, 3, 4, 5];
const reducedValue = reduceExampleArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log("reducedValue:",reducedValue);

// some()
const someExampleArray = [1, 2, 3, 4, 5];
const hasGreaterThanThree = someExampleArray.some(element => {
  return element > 3;
});
// console.log("hasGreaterThanThree:",hasGreaterThanThree);

// every()
const everyExampleArray = [1, 2, 3, 4, 5];
const allGreaterThanZero = everyExampleArray.every(element => {
  return element > 0;
});
// console.log("allGreaterThanZero:",allGreaterThanZero);

// push()
const pushExampleArray = [1, 2, 3];
pushExampleArray.push(4, 5);
// console.log("allGreaterThanZero:",pushExampleArray);

// pop()
const popExampleArray = [1, 2, 3];
const poppedElement = popExampleArray.pop();
// console.log("poppedElement:",poppedElement);

// shift()
const shiftExampleArray = [1, 2, 3];
const shiftedElement = shiftExampleArray.shift();
// console.log("shiftedElement:",shiftedElement);

// unshift()
const unshiftExampleArray = [1, 2, 3];
const newLength = unshiftExampleArray.unshift(4, 5);
// console.log(unshiftExampleArray);
// console.log(newLength);

// splice()
const spliceExampleArray = [1, 2, 3, 4, 5];
const splicedArray = spliceExampleArray.splice(2, 2, 6, 7);
// console.log(spliceExampleArray);
// console.log(splicedArray);

// concat()
const concatExampleArray1 = [1, 2, 3];
const concatExampleArray2 = [4, 5, 6];
const concatenatedArray = concatExampleArray1.concat(concatExampleArray2);
// console.log(concatenatedArray);

// join()
const joinExampleArray = [1, 2, 3];
const joinedString = joinExampleArray.join('-');
// console.log(joinedString);

// slice()
const sliceExampleArray = [1, 2, 3, 4, 5];
const slicedArrayCopy = sliceExampleArray.slice(1, 3);
// console.log(slicedArrayCopy);

// indexOf()
const indexOfExampleArray = [1, 2, 3, 4, 5];
const index = indexOfExampleArray.indexOf(4);
// console.log(index);

// lastIndexOf()
const lastIndexOfExampleArray = [1, 2, 3, 4, 5, 3];
const lastIndex = lastIndexOfExampleArray.lastIndexOf(3);
// console.log(lastIndex);

// sort()
const sortExampleArray = [3, 1, 4, 2, 5];
sortExampleArray.sort();
// console.log(sortExampleArray);

// find()
const findExampleArray = [1, 2, 3, 4, 5];
const foundElement = findExampleArray.find(element => {
  return element > 3;
});
// console.log(foundElement);

// findIndex()
const findIndexExampleArray = [1, 2, 3, 4, 5];
const foundIndex = findIndexExampleArray.findIndex(element => {
  return element > 3;
});
// console.log(foundIndex);

// toString()
const toStringExampleArray = [1, 2, 3];
const arrayAsString = toStringExampleArray.toString();
// console.log(arrayAsString);

// toLocaleString()
const toLocaleStringExampleArray = [1, 2, 3];
const localizedString = toLocaleStringExampleArray.toLocaleString();
// console.log(localizedString);

// length
const lengthExampleArray = [1, 2, 3, 4, 5];
// console.log(lengthExampleArray.length);

// fill()
const fillExampleArray = [1, 2, 3, 4, 5];
const filledArray = fillExampleArray.fill(0, 2, 4);
// console.log(filledArray);

// isArray()
const isArrayExampleArray = [1, 2, 3, 4, 5];
const isArrayResult = Array.isArray(isArrayExampleArray);
// console.log(isArrayResult);
