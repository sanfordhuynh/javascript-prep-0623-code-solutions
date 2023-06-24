function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const total = addTwoNumbers(4, 7);
console.log(total);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('Kitty');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return num1 * num2;
}
const multipliedByFive = addAndMultiplyBy5(10, 5);
console.log(multipliedByFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const totalValue = multiplyAndDivideBy5(50, 6);
console.log(totalValue);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractedNumber = subtractTwoNumbers(100, 25);
console.log(subtractedNumber);

function getCircleCircumference(radius) {
  return radius * 3.14;
}
const circleCircumference = getCircleCircumference(6);
console.log(circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Sanford', 'Huynh');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed);
