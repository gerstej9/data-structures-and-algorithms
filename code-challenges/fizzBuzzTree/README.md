# Queue with Stacks
Code Challenge 18 of Code Fellows Class 401

## Challenge
* Create a function that intakes a k-ary tree and changes values of nodes to Fizz, Buzz, FizzBuzz or a string of the value depending on if the value is divisible by 3, 5, or 3 and 5 respectively. Return a new tree.

## Approach & Efficiency
* I took the approach of creating functions with O(1) and O(n) Big O space/time.

## Solution
To solve this problem I used a breadth first traversel method that utilizes a queue to move through the k-ary tree. At each value I used a series of comparator functions with modulus to analyze whether or not the values where divisible by 3, 5, or both and then changed the current value accordingly. I made a copy of the original tree at the beginning of the function and modified the new version throughout the function before returning the new, modified tree at then end of the function.