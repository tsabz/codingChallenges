# CodingChallengez

Coding challenge can be a very intimidating part interviews, but they shouldn't be!! 
I've put together a document of all my favorite challenges from either LeetCode or codewars, either because they were fun or I just thought they were really helpful. 

## Lets Get Started

### what is the difference between a data structure and algorithms ?? 
Data structures are quite literally how we structure the data we are working with. 


### Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

```
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

console.log(isPalindrome(14341)) true
console.log(isPalindrome(-14341)) false
```

### Reverse Integer 
```
const reverse = (x) => { return (x < 0) ? "-" + x.toString().split("").slice(1).reverse().  join("") : x.toString().split("").reverse().join("")   
};

console.log(reverse(-123))
console.log(reverse(123))
```