function countFrequencyOfItems(arr) {
  const frequency = {};
  for (const item of arr) {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }
  return frequency;
}

// const array = ["apple", "banana", "apple", "orange", "banana", "apple"];
const array = [1, 2, 2, 3, 4, 4, 4, 5, 6];
console.log(countFrequencyOfItems(array));
 