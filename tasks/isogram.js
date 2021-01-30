// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


//First solution
const isIsogram =  str => {
    const arr = str.split('');
    const arrLow = arr.map(i => i.toLowerCase());
    const checkArr = arrLow.filter((e,i,a)=>a.indexOf(e) === i);
    return JSON.stringify(arrLow) === JSON.stringify(checkArr);
}

//Second Solution
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}

//Third Solution
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}