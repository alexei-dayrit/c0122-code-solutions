function ExampleConstructor() {}

console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property', typeof ExampleConstructor.prototype);

var something = new ExampleConstructor();
console.log('something variable:', something);

var isInstance = something instanceof ExampleConstructor;
console.log('value of isInstance variable:', isInstance);
