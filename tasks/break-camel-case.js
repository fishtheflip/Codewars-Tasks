// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// solution("camelCasing")  ==  "camel Casing"

//First Solution

function solution(string) {
    let arr = string.split('');
    let lowArr = arr.map((i) => i.toLowerCase());
    const finalArr = []
    for(let i = 0; i <= arr.length-1;i++){
        if(arr[i] !== lowArr[i] && i !== 0){
                finalArr.push(' ');
         }
      finalArr.push(arr[i]);
    }
    return finalArr.join('');
}

//Second Solution

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

//Third Solution

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }