export {};



function truncateString(str:string, num:number): string{
    return str.slice(0, num)
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE


// //function truncateString(str, num) {
//     return str;
//   }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);