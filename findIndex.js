let prompt = require('prompt-sync')();
let target = prompt("What's the target? ");
let arr = [1,2,3,4];

console.log(`Target: ${target}, found at index: ${arr.findIndex(n => n == target)}`);