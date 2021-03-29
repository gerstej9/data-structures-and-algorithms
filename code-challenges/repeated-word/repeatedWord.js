'use strict';

const repeatedWord = (str) => {
  let hash = {};
  let newStr = str.replace(/,/g, '').trim();
  let arr = newStr.split(' ');
  for (let i = 0; i < arr.length; i++){
    if (hash[arr[i]]|| hash[arr[i]] === 0) {
      return arr[i];
    }
    hash[arr[i].toLowerCase()] = i;
    console.log(hash);
  }
  return null;
};

module.exports = repeatedWord;
