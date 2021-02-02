//find second large number in array

// Sample Input 0

// 5
// 2 3 6 6 5

// Sample Output 0

// 5



function getSecondLargest(nums) {
    let arrSort = nums.sort((a,b)=> a-b).reverse();
    let filterSet = [...new Set(arrSort)];
    return filterSet[1];
}