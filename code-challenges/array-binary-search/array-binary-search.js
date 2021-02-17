'use strict';

function binarySearch(array, value){
  let lowKey = 0;
  let highKey = array.length -1 ;
  let finalIndex = -1;
  while(lowKey <= highKey){
    let middleIndex = Math.floor ((lowKey + highKey)/ 2);
    if( value === array[middleIndex]){
      finalIndex = middleIndex;
      return finalIndex;
    }else if(array[middleIndex] < value ){
      lowKey = middleIndex + 1;
    }else{
      highKey = middleIndex - 1;
    }
  }
  return finalIndex;
}

module.exports = binarySearch;
