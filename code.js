console.log('coding!');

// ** PALINDROME ** //
// const isPalindrome = (x) => {
//     //num to string
//     let xnum = x.toString()
//     let j = xnum.length - 1
//     //for loop for each char
//     for(let i = 0; i < xnum.length; i++){
//         //for loop backwards for each char
//             //if the chars is not the same return false
//             if(xnum[i] !== xnum[j]) {
//                 return false
//         }
//       j--;
//     }
//     return true         
// };

// console.log(isPalindrome(14341))
// console.log(isPalindrome(-14341))


// ** VALID PARENTHISIS ** //
const isValid = (s) => {  
    validS = {}

    for(char in s) {
        if(s == '(')
    }

};

console.log(isValid("()"))
console.log(isValid("{]"))



// const reverse = (x) => { return (x < 0) ? "-" + x.toString().split("").slice(1).reverse().join("") : x.toString().split("").reverse().join("")   
//  };

//  console.log(reverse(-123))
//  console.log(reverse(123))