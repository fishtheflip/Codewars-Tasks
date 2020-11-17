//The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

const sumArray = array => {
    if(array === null){
      return 0;
    }
    let sum = 0;
    let sortArr = array.sort((a,b)=> a-b);
    sortArr.pop();
    sortArr.shift();
    for (let i = 0; i <= sortArr.length-1; i++){
      sum += sortArr[i];
    }
    return sum;
  }