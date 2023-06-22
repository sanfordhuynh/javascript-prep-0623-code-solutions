const person = {
  firstName: 'Sanford',
  lastName: 'Huynh',
  hobby: 'badminton',
};

const fullName = person.firstName + ' ' + person.lastName;

person.job = 'Cloud Support Engineer';
person['previousJob'] = 'Student';

console.log(person);
console.log("The person's name is: " + fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job is: " + person['previousJob']);

console.log(person);
