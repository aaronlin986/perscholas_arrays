let arr = ['apple', 'pear', 'grape', 'orange'];

let maxStr = 0;
for(let i = 1; i < arr.length; i++){
    if(arr[maxStr].length < arr[i].length){
        maxStr = i;
    }
}
console.log(`Longest string found: ${arr[maxStr]}`);