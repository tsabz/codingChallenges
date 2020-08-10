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
// const isValid = (s) => {  
//     validS = {}

//     for(char in s) {
//         if(s == '(')
//     }

// };

// console.log(isValid("()"))
// console.log(isValid("{]"))


// ** REVERSE INTEGER ** //
// const reverse = (x) => { return (x < 0) ? "-" + x.toString().split("").slice(1).reverse().join("") : x.toString().split("").reverse().join("")   
//  };

//  console.log(reverse(-123))
//  console.log(reverse(123))


// const getCount = (str) => {
//     let vowelsCount = 0;
    
    
//     if(st == "a" || "e" || "i" || "o" || "u") {
//         vowelsCount++
//     }
    
//     return vowelsCount;
//   }

//   console.log(getCount("tonia"));


// const simpleArraySum = (ar) => {
//     for (var i = 0; i < ar.length; i++) {
//         sum += ar[i]
//       }
// }

// console.log(simpleArraySum(1,2));


// let myArray = ['a', 'b', 'c', 'd']

// myArray.push('end')// adds to the end of the array
// myArray.unshift('start') // adds to the beginning of the array
// myArray.pop()// deletes the last item in the array


///ES6 SYNTAX
// myArray = ['start',...myArray, 'end'] // es6 adds to the beginning and end 

// console.log(myArray)

// ** STACK ** //

// const stack = [];
//     stack.push(1);
//     stack.push(2);
//     stack.push(3);

//     console.log(stack)
//     stack.push(4)
//     // push adds 4 to the end of the array 
//     console.log(stack) 
//     //new stack array = [1, 2, 3, 4]
//     stack.pop()
//     // pop deletes 4 from the end of the array 
//     console.log(stack) 
//     //new stack array = [1, 2, 3]

//     //shift deletes the first number in the array
//     stack.shift()
//     //new stack array = [2, 3]
//     stack.shift()
//     //new stack array = [3]
//     console.log(stack) 

//     //unshift adds the first number to the array
//     stack.unshift(1, 2)
//     //new stack array = [1, 2, 3]
//     console.log(stack)


// ** Reverse String using stack ** //

// const reverseStr = (str) => {
//     let stack = []
//     //push each string string into stack

//     for(let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     let reverse = '';

//     while(stack.length > 0) {
//         reverse += stack.pop();
//     }
//     return reverse //Tonia Saba
// }



// const reverseStr = (str) => {
//     let stack = []
//     //push each string string into stack

//     for(let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     console.log(stack) //["T", "o", "n", "i", "a", " ", "S", "a", "b", "a"]
//     let reverse = '';
//     console.log(reverse) //''

//     while(stack.length > 0) {
//         console.log(stack)
//         reverse += stack.pop();
//         console.log(stack)
//         console.log(reverse)
//     }
//     return reverse //Tonia Saba
// }

// console.log(reverseStr('Tonia Saba'))


// console.log(reverseStr('Tonia Saba'))


// ** while loop practice ** //

// const whileLoop = (str) => {
//     stack = []

//     for(let i = 0; i < str.length; i++){
//         stack.push(str[i])
//     }
//     let reverseStr = ''

//     while(stack.length > 0){
//         reverseStr += stack.pop()
//     }
//     return reverseStr
// }
// console.log(whileLoop('love'))
// console.log(whileLoop('Tonia'))


// ** Merge Sorted Array ** //

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2)
    nums1.sort(function(a, b){return a - b}) 
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))



// ** Hash tables ** //

