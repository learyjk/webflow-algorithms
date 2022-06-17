let targetEl = document.querySelector('[data-element="target"]');
let statusMessageEl = document.querySelector('[data-element="status-message"]');
// let incremenetEl = document.querySelector('[data-element="increment-target"]');
// let decrementEl = document.querySelector('[data-element="decrement-target"]');
// let reloadButtonEl = document.querySelector('[data-element="button-reload"]');

const min = 1;
const max = 10;
const delayTime = 800;
let target = 6;
let index1, index2;


let numbers = document.querySelectorAll('[data-element="number"]');
console.log('numbers[1]', numbers[1])

for (const number of numbers) {
  number.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
}

let numElementOne = document.querySelector('[data-element="num1"]');
numElementOne.textContent = numbers[0].textContent
let numElementTwo = document.querySelector('[data-element="num2"]');
numElementTwo.textContent = numbers[1].textContent
console.log('numElementTwo', numElementTwo.textContent)
let equalsElement = document.querySelector('[data-element="equals"]');
equalsElement.textContent = parseInt(numElementOne.textContent) + parseInt(numElementTwo.textContent)

const twoSums = async (numbers, target) => {
  let foundSolution = false;

  for (var i = 0; i < numbers.length - 1; i++) {
    numbers[i].classList.add("current");
    let num1 = parseInt(numbers[i].textContent);
    numElementOne.textContent = num1.toString()
    await delay(delayTime);

    for (var j = i + 1; j < numbers.length; j++) {
      numbers[j].classList.add("current");
      let num2 = parseInt(numbers[j].textContent);
      numElementTwo.textContent = num2.toString()
      equalsElement.textContent = (num1 + num2).toString()

      await delay(delayTime);
      if (num1 + num2 === target) {
        foundSolution = true;
        index1 = i
        index2 = j
        break;
      }
      numbers[j].classList.remove("current");
    }

    if (foundSolution) {
      break;
    }
    numbers[i].classList.remove("current");
  }
  if (foundSolution) {
    equalsElement.classList.add('success')
    statusMessageEl.textContent = `Solution at indices ${index1} and ${index2}.`
  } else {
    statusMessageEl.textContent = `No solution found, return -1`;
  }
  statusMessageEl.classList.remove('hide')
};

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

twoSums(numbers, target);

// incremenetEl.addEventListener('click', (event) => {
//   target += 1;
//   targetEl.textContent = target.toString()
// })

// decrementEl.addEventListener('click', (event) => {
//   target -= 1;
//   targetEl.textContent = target.toString()
// })

// reloadButtonEl.addEventListener('click', (event) => {
//   window.location.reload()
// })



// var twoSum = function(nums, target) {

//Approach 3 - O(N)
// var table = {};

// for (var i = 0; i < nums.length; i++) {
//   var complement = target - nums[i];
//   if (complement in table) {
//     return [table[complement], i];
//   }
//   table[nums[i]] = i;
// }

//First Approach - works but O(Nsquared)

//   for (var i = 0; i < numbers.length - 1; i++) {
//     num[i].
//     for (var j = i + 1; j < numbers.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//         return result;
//       }
//     }
//   }
//   return -1;
// };


