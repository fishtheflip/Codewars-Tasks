// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, , or a downhill, step. Hikes always start and end at sea level, and each step up or down represents a

// unit change in altitude. We define the following terms:

//     A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//     A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Sample Input

// 8
// UDDDUDUU

function countingValleys(steps, path) {
    
    let currentLevel = 0;
    let count = 0;
    let lastInt;
    const arr= path.split('');
    
    for(let i = 0; i <= steps; i++){
        lastInt = currentLevel;
        if(arr[i] === 'U'){
            currentLevel++;
            
        }
        if(arr[i] === 'D'){
            currentLevel--;
            
        }
        
        if (currentLevel === 0 && lastInt < 0){
            count++;
        }
        
    }
    return count;
    
}

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/

// The hiker enters and leaves one valley.