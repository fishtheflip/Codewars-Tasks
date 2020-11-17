// The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const accum = s => {
    let ss = s.split('');
    let arr = [];
    ss.map((item, i)=>{
      arr.push(item.toUpperCase());
      for(let j = 1; j <= i; j++){
        arr.push(item.toLowerCase());
      }
      arr.push('-');
    })
    arr.pop();
    let finStr = arr.join('');
    return finStr;
  }