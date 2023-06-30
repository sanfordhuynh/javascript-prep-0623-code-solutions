/* exported toObject */
function toObject(keyValuePair) {
  const [key, value] = keyValuePair;
  const newObject = {};
  newObject[key] = value;
  return newObject;
}
