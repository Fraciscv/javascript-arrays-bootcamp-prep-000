var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

functions addElementToBeginningOfArray(chocolateBars, element){
  return [chocolateBars, ...element];

}

functions destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;

}
