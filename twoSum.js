var twoSum = function (nums, target) {
    const map = new Map();

    for(i=0;i<nums.length;i++){
        const complement=target-nums[i];

        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
