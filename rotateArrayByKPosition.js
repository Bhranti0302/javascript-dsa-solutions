// You shift every element of the array K steps to the right, and the elements that move past the last index come back to the front of the array.

function rotateArrayByKPosition(arr, k) {
    const n = arr.length;
    k=k%n;

    for(i=0;i<k;i++){
        const last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

const array = [1, 2, 3, 4, 5];
console.log(rotateArrayByKPosition(array, 2)); 


// Key Understanding
// pop() → removes last element
// unshift() → adds element at the start
// Each loop performs one right rotation
// k % n prevents unnecessary rotations