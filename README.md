# CodingChallengez

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