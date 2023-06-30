/* exported getValue */
function getValue(object, key) {
  // return (object, object.key());
  if (key in object) {
    return object[key];
  }
  return undefined;
}
