// EX --- > AAAABBCAAG  ----> 4A2B1C2A1G


function solve(s) {
    // Write your code here
    let result = "";
    let count = 1;
   for(let i = 0; i < s.length;i++) {
        if(s[i] === s[i+1]) count++;
        else {
            result += count + s[i]
            count = 1;
        }

   }
   return result;

}

