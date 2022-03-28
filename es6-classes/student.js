/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    // destructuring first and last name properties of the 'this' obj
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  getIntroduction() {
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${this.subject}.`;
  }
}
