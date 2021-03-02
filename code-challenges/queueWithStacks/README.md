# Queue with Stacks
Code Challenge 11 of Code Fellows Class 401

## Challenge
* Create a pseudoqueue class that utilizes two stacks to imitate behavior of a queue

## Approach & Efficiency
* I took the approach of creating functions with O(1) and O(n) Big O space/time.

## Solution
The solution to this problem was very difficult for me. I decided to enqueue all values to one stack in a first in last out order. Upon the dequeue function I moved all of the values to the second stack so they were first in first out orientation, saved the top value, and then returned all the other values back to the first stack in first in last out order to be ready for another enqueue or dequeue.