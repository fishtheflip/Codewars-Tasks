// There is a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
//The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 0 or 1

// . The player must avoid the thunderheads. 
//Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud.
// It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0
// if they are safe or 1 if they must be avoided. 

function jumpingOnClouds(c) {
    let jumpCount = 0;
    for(let i = 0; i <= c.length; i++){
        
        if(c[i]===0 && c[i+1] === 0 && c[i+2] === 1){
            jumpCount++;
            continue;
        }
        if(c[i ] === 0 && c[i +1] === 1){
            jumpCount++;
            continue;
        }
        if(c[i]===0 && c[i + 1] === 0 && c[i +2] === 0 ){
            jumpCount++;
            i++;
            continue;
        }
        if(c[i] === 0 && c[i+1] === 0 && c[i+2] === undefined){
            jumpCount++;
        }
    }
    return jumpCount;
}