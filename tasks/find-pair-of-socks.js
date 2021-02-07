// There is a large pile of socks that must be paired by color.
//  Given an array of integers representing the color of each sock,
//   determine how many pairs of socks with matching colors there are.
// There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is

// .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

//     int n: the number of socks in the pile
//     int ar[n]: the colors of each sock

// Returns

//     int: the number of pairs


function sockMerchant(n, ar) {
    let count = 0;
    let arr1= ar.sort((a,b)=>a-b);
    let find;
    // console.log(arr1);
    for(let i = 0; i <= n; i++){
        if(arr1[i] === undefined) break;
        let find = arr1[i];
        if(arr1[i] === arr1[i +1]){
            count++;
            i++
        }
        
    }
        // console.log(count);
        return count;
    }