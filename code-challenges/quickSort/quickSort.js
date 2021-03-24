'use strict';

function quickSort(arr, left, right) {
  if (left < right) {
    console.log(arr[left], 'LEFT');
    console.log(array[right], 'RIGHT');
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i < right; i++) {

    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low) {
  console.log('bracket i', arr[i]);
  console.log('bracket low', arr[low]);
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
let array1 = [8,4,23,42,16,15];
let array = [8,4,23,42,16,15];
console.log(quickSort(array, 0, array.length-1));
console.log(array1);
module.exports = quickSort;

