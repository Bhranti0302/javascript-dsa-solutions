function moveZeroToEnd(arr) {
    let index=0;

    for(i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[index]=arr[i];
            index++
        }
    }

    while(index<arr.length){
        arr[index]=0;
        index++
    }
    return arr;
}

const array=[0,1,0,2,3,0,4,5];
console.log(moveZeroToEnd(array));



// Key Concept (Interview Line)

// “I use one pointer (index) to track the position of non-zero elements.
// First, I shift all non-zeros forward while maintaining order.
// Then I fill the remaining positions with zeros.”