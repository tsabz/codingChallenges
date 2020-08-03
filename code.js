console.log('coding!');


// let array = [1,2,3]

// console.log(array);



// const reverse = (x) => {  return x.toString().split("").reverse().join("") 
// };

// console.log(reverse(-123));


// const reverse = (x) => {  return x.toString().split("").reverse().join("")                 
// };

const isPalindrome = (x) => {
    //num to string
    let xnum = x.toString()
    let j = xnum.length - 1
    //for loop for each char
    for(let i = 0; i < xnum.length; i++){
        //for loop backwards for each char
            //if the chars is not the same return false
            if(xnum[i] !== xnum[j]) {
                return false
        }
      j--;
    }
    return true         
};

console.log(isPalindrome(14341))
console.log(isPalindrome(-14341))