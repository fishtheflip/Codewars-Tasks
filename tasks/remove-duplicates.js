
//Variant 1
const removeDuplicates = (nums) => {
    const newArray = [...new Set(nums)];
   let count = 0;
    for(let i = 0; i <= newArray.length -1; i++){
        count++;
    }
    return count;
};

//Variant 2
const removeDuplicates = (nums) => {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
    };