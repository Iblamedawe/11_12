/*
 0 = empty
 1 = ship
 2 = hit
 3 = miss
*/
const player = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]            
];
const cpu = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]            
];
function generateArray(n) {
    let shipsleft = 3;
    while (shipsleft > 0) {
        let row = Math.floor(Math.random() * 4);
        let col = Math.floor(Math.random() * 4);
        cpu[row][col] = 1;
        shipsleft--;
    }
}

document.addEventListener('DOMContentLoaded', generateArray(cpu))