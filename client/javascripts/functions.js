//jshint esversion:6


let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
  let result = " ";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
    result = `${result}Not`;
  }
  return result;
};

console.log(bitBatBotOrNot(7));
console.log(bitBatBotOrNot(10));
console.log(bitBatBotOrNot(27));
console.log(bitBatBotOrNot(94));

let findAllbitBatBotOrNots1 = (arr) => {

  return arr.map(num => `${num}: ` + bitBatBotOrNot(num));

};

findAllbitBatBotOrNotsXc = (arr) => {

  let result = [];

  for (let num in arr) {

    result.push(arr[num] + ": " + bitBatBotOrNot(arr[num]));

  }

  return result;

};

findAllbitBatBotOrNots3 = (arr) => {

let result = [];

for(num of arr){

result.push(num+": "+bitBatBotOrNot(num));

}

return result;

};

let findAllbitBatBotOrNots4 = (arr) => {
let result = [];
arr.forEach()
}



console.log(findAllbitBatBotOrNots1(arrOf1To100));

console.log(findAllbitBatBotOrNotsXc(arrOf1To100));

console.log(findAllbitBatBotOrNots3(arrOf1To100));

console.log(findAllbitBatBotOrNots4(arrOf1To100));
