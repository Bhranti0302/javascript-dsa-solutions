function missingNumberInArrays(arr,n){
    const total=n*(n+1)/2;
    let sum=0

    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return total-sum;
}

const array=[3,0,1];
console.log(missingNumberInArrays(array,3));