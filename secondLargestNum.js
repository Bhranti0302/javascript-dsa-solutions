// function secondLargestNum(arr) {
//         const secondNum=Math.max(...arr)
//         return Math.max(...arr.filter(num=>num<secondNum));
//     }

function secondLargestNum(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const array = [1, 3, 4, 5, 0, 2, 6];
console.log(secondLargestNum(array)); // 5


