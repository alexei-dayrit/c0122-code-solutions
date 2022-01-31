var student = {
  firstName: 'Alexei',
  lastName: 'Dayrit',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2017
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Miu',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
