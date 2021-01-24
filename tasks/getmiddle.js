// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// getMiddle("test") should return "es"

// getMiddle("testing") should return "t"

// getMiddle("middle") should return "dd"

// getMiddle("A") should return "A"


//Variant 1

const getMiddle = str => {
    if(str.length === 1) return str;
    if(str.length % 2 === 0){
        let num = str.length / 2;
        let begStr = '';
        let endStr = '';
        let finalStr = '';
        begStr = str.slice(0, num);
        endStr = str.slice(num);
        finalStr = begStr[begStr.length-1] + endStr[0] ;
        return finalStr;
    }
    if(str.length % 2 !== 0){
      return str[((str.length - 1) / 2) ];
    }
  }



//Variant 2
  function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


//Variation 3
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }