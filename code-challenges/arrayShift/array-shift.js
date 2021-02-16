'use strict';

function insertShiftArray(array, value){
  const middleIndex = Math.ceil(array.length/2)
  let finalArray = [];
  for(let i = 0; i < array.length; i++){
      if ( i === middleIndex){
     finalArray.push(value);
     finalArray.push(array[i]);
    }else{
     finalArray.push(array[i]);
    }
   }
   return finalArray;
  }

  module.exports = insertShiftArray;
