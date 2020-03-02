const chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

functions addElementToBeginningOfArray(array, element) {
  return [array, ...element];

}

functions destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;

}
