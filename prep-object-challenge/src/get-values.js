/* exported getValues */
function getValues(object) {
  const values = [];

  for (const value in object) {
    if (Object.prototype.hasOwnProperty.call(object, value)) {
      values.push(object[value]);
    }
  }
  return values;
}
