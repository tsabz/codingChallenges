# CodingChallenges

Coding challenge can be a very intimidating part interviews, but they shouldn't be!! 
I've put together a document of all my favorite challenges from either LeetCode or codewars, either because they were fun or I just thought they were really helpful. 

## Lets Get Started

### what is the difference between a data structure and algorithms ?? 
Data structures are quite literally how we structure the data we are working with. 
algorithms is a lot like a recipe, called a procedure. A procedure you tell your computer 
to follow in order to solve a problem or reach a desired outcome in whatever you are creating. 

#### Stack Data Structure example 

```
const stack = [];
    stack.push(1);
    stack.push(2);
    stack.push(3);

    console.log(stack)
    stack.push(4)
    // push adds 4 to the end of the array 
    console.log(stack) 
    //new stack array = [1, 2, 3, 4]
    stack.pop()
    // pop deletes 4 from the end of the array 
    console.log(stack) 
    //new stack array = [1, 2, 3]

    //shift deletes the first number in the array
    stack.shift()
    //new stack array = [2, 3]
    stack.shift()
    //new stack array = [3]
    console.log(stack) 

    //unshift adds the first number to the array
    stack.unshift(1, 2)
    //new stack array = [1, 2, 3]
    console.log(stack)
```
### Reverse String (using stack)
First we want to loop through the str and push each letter into the stack
then we want to set reverse to empty string and do a while loop that runs through the stack length starting from the end of the array and then pop each letter from the stack to contstruct a reverse str 

```

const reverseStr = (str) => {
    let stack = []
    //push each string string into stack

    for(let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    let reverse = '';

    while(stack.length > 0) {
        reverse += stack.pop();
    }
    return reverse //Tonia Saba
}

console.log(reverseStr('Tonia Saba'))
```


## Coding Problems

### Merge Sorted Array
from Leetcode 

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

```
const merge = (nums1, m, nums2, n) => { 
  nums1.splice(m, n, ...nums2)
  nums1.sort(function(a, b){return a - b}) 
};

```

Solution : I used the splice method to splice the nums1 array, while passing in m and n for the count.  start at index m(3) and add n(3).  Then used the spread operator to pass in nums2 array in order to add it at the position.  
Challenges : I wanted to chain on .sort() in order to sort the array on one line.  But what I forgot was, once you use splice it it modifies and changes the array therefore you must create a new line with the new nums1 array and sort that one specificaly.  Now also to take into account the positives and negative I had to pass in a function that returns a - b


### Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

```
const isPalindrome = (x) => {
    let xnum = x.toString()
    let j = xnum.length - 1
    
    for(let i = 0; i < xnum.length; i++){
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
