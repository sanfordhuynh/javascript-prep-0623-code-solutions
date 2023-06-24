// create your loops here.

function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i <= 18) {
    array.push(i);
    i += 2;
  }
  return array;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forloop1 output', forLoop1());

let explosionTime = '';
function forLoop2() {
  for (let i = 100; i > 0; i--) {
    explosionTime += 'Time till explosion ' + i + '!\n';
  }

  return explosionTime;
}

console.log(forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];

  for (const x in object) {
    array.push(x);
  }
  return array;
}

console.log(forInLoop1(object));

function forInLoop2(object) {
  const array = [];

  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log(forInLoop2(object));
