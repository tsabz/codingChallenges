# CodingChallengez

Coding challenge can be a very intimidating part interviews, but they shouldn't be!! 
I've put together a document of all my favorite challenges from either LeetCode or codewars, either because they were fun or I just thought they were really helpful. 

## Lets Get Started

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