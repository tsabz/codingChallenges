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

// const merge = (nums1, m, nums2, n) => {
//     nums1.splice(m, n, ...nums2)
//     nums1.sort(function(a, b){return a - b}) 
// }

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))



// ** Hash tables ** //


// ** SIMPLE ARRAY SUM ** //
// function simpleArraySum(ar) {
  
//     addSum = 0 

//   for(let i = 0; i < ar.length; i++){
//       addSum += ar[i]
//   }
//   return addSum
// }


// console.log(simpleArraySum([1,2,3]))

// ** COMPARE THE TRIPLETS ** //

// function compareTriplets(a, b) {
//     let alice = 0
//      let bob = 0

//     for(let i = 0; i < a.length; i++){
//             if(a[i] > b[i]){
//                 alice++
//             } else if (b[i] > a[i]) {
//                 bob++
//             }
//     }
//     return [alice, bob]
// }


// **  A VERY BIG SUM ** //

// function aVeryBigSum(ar) {
    
//     let bigSum = 0

//     for(let i = 0; i < ar.length; i++) {
//         bigSum += ar[i]
//     }
//     return bigSum
// }

// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))

//** MATRIX SQUARES AND DIAGNAL DIFF **//

// const sum = (matrix) => {
  
//     let addSum = 0
    
    
//     matrix.forEach((element, index) => {
      
//       // Diagonal from top left to bottom right
//       addSum += matrix[index][index];
//       addSum += matrix[index][matrix[index].length - 1 - index]   
//      })
    
//     return addSum;
//     }

    // function diagonalDifference(arr) {
    //     let left = 0
    //     let right = 0

        

    //     arr.forEach((element, index) => {
    //         left += arr[index][index];
    //         right += arr[index][arr[index].length - 1 - index]     
    //     })
    //       return Math.abs(right - left) 
    // }

// ** PLUS MINUS ** //

// function plusMinus(arr) {

//     const length = arr.length || 0; 
//     let positive = 0 
//     let negative = 0 
//     let zero = 0

//     if(length > 0 && length <= 100 ){
//         arr.map((element, key) => {
//             if(element > 0) {
//                 positive++
//             } else if (element < 0) {
//                 negative++
//             } else {
//                 zero++
//             }
//             return element
//         })
//     }
//      console.log((positive / length) || 0);
//      console.log((negative / length) || 0);
//      console.log((zero / length) || 0);  
// }

// ** Staircase ** // 

// function staircase(n) {

//     // here we use just one for loop where i tracks the number of rows
//     // the number of rows (i) should be less than or equal to n
//       for (let i = 1; i <= n; i++) {
//           console.log(n)
//           console.log(i)
//         // print out a " " n-i times and append a # i times
//         // console log adds a new line by default
        
//           console.log(" ".repeat(n-i) + "#".repeat(i))
//       }    
//   }

//   console.log(staircase(6))

//** Mini-Max Sum *//

// arr = [1, 2, 3, 4, 5]

// 1 + 2 + 3 + 4 = 10
// 2 + 3 + 4 + 5 = 14

// function miniMaxSum(arr) {
//     let sortArr = arr.sort(function(a,b) {
//         return a - b
//     })
//     let minSum = 0
//     let maxSum = 0
    
//     for(let i = 0; i < sortArr.length - 1; i++) {
//         minSum += sortArr[i]
//     }

//     for(let j = 1; j < sortArr.length; j++){
//         maxSum += sortArr[j]
//     }
//     console.log(minSum, maxSum)
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]))
// console.log(miniMaxSum([7, 69, 2, 221, 8974]))



//  an array of numbers representing candle heights 

// function birthdayCakeCandles(arr) {
//     let max = Math.max(...arr); // 3 
//     return arr.filter(item => item === max).length; //
// }
// console.log(birthdayCakeCandles([3,1,2,3]))

// const birthdayCakeCandle = (arr, target) => arr.reduce((count,value) => (value === target ? count + 1 : count), 0);


// console.log(birthdayCakeCandle([1,2,2,3], 2))




// let arr = [3, 1, 2, 3]


// console.log(candles)

// counts[num] = counts[num] ? counts[num] + 1 : 1;






function findLowestPrice(products, discounts) {
    
    let totalSum = 0 
    let lowestPrice = []
    
    for(let i = 0; i < products.length; i++){
        lowestPrice += products[i][0]
        // for(let j = 1; j < products.length; j++) {
            
        // }
    }

}

