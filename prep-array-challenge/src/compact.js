/* exported compact */
function compact(array) {
  const compactArray = [];

  // for(let i=0; i<array.length;i++){
  //   if(array[i] === true ){
  //     compactArray.push(array[i]);
  //   }else if (array[i] != null ) {
  //     compactArray.push(array[i]);
  //   }
  //   console.log(compactArray);
  // }

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (
      currentValue !== false &&
      currentValue !== null &&
      !Number.isNaN(currentValue) &&
      currentValue !== 0 &&
      currentValue !== undefined &&
      currentValue !== ''
    ) {
      compactArray.push(currentValue);
    }
  }
  return compactArray;
}
