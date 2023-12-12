// Object.assign()
const assignTarget = { a: 1 };
const assignSource = { b: 2 };
const assignedObject = Object.assign({}, assignTarget, assignSource);
console.log(assignedObject);

// Object.create()
const protoObj = { x: 10 };
const createdObj = Object.create(protoObj);
console.log(createdObj);

// Object.defineProperty()
const defObj = {};
Object.defineProperty(defObj, 'property1', {
  value: 42,
  writable: false
});
console.log(defObj.property1);

// Object.defineProperties()
const defPropsObj = {};
Object.defineProperties(defPropsObj, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(defPropsObj.property1);

// Object.entries()
const entriesObj = { a: 'Apple', b: 'Banana', c: 'Cherry' };
const entriesArray = Object.entries(entriesObj);
console.log(entriesArray);

// Object.freeze()
const freezeObj = { value: 42 };
Object.freeze(freezeObj);
// Attempt to modify the frozen object - won't work
freezeObj.value = 99;
console.log(freezeObj.value);

// Object.getOwnPropertyDescriptor()
const descObj = { property1: 42 };
const propertyDescriptor = Object.getOwnPropertyDescriptor(descObj, 'property1');
console.log(propertyDescriptor);

// Object.getOwnPropertyNames()
const namesObj = { a: 1, b: 2, c: 3 };
const propertyNames = Object.getOwnPropertyNames(namesObj);
console.log(propertyNames);

// Object.getOwnPropertySymbols()
const symbolObj = {};
const symbolProp = Symbol('key');
symbolObj[symbolProp] = 'value';
const symbolKeys = Object.getOwnPropertySymbols(symbolObj);
console.log(symbolKeys);

// Object.getPrototypeOf()
const protoTypeObj = {};
const proto = Object.getPrototypeOf(protoTypeObj);
console.log(proto);

// Object.is()
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is('foo', 'bar')); // false

// Object.keys()
const keysObj = { a: 1, b: 2, c: 3 };
const objectKeys = Object.keys(keysObj);
console.log(objectKeys);

// Object.preventExtensions()
const preventExtensionsObj = {};
Object.preventExtensions(preventExtensionsObj);
preventExtensionsObj.newProperty = 'test';
console.log(preventExtensionsObj.newProperty); // undefined

// Object.seal()
const sealObj = { prop: 42 };
Object.seal(sealObj);
sealObj.prop = 33; // Modify existing property
sealObj.newProp = 100; // Attempt to add a new property
console.log(sealObj);

// Object.setPrototypeOf()
const setProtoObj = Object.create(null);
const newProtoObj = {};
Object.setPrototypeOf(setProtoObj, newProtoObj);
console.log(Object.getPrototypeOf(setProtoObj));

// Object.values()
const valuesObj = { a: 'Apple', b: 'Banana', c: 'Cherry' };
const valuesArray = Object.values(valuesObj);
console.log(valuesArray);

// Object.hasOwnProperty()
const hasOwnObj = { a: 1, b: 2, c: 3 };
console.log(hasOwnObj.hasOwnProperty('a')); // true
console.log(hasOwnObj.hasOwnProperty('toString')); // false
