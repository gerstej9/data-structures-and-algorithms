
# Walkthrough of a Quick Sort Function

## Below is a visual and descriptive walkthrough of a quick sort function

* ```Input -> arr = [8,4,23,42,16,15]```

![](../../assets/CodeChallenge28_function.jpg)

* As seen in the image above, the quick sort method is a recursive function that relies on two helper functions; partition and swap. The main quickSort function takes in an array, and it's lowest and highest indices as its three parameters

![](../../assets/CodeChallenge28_1.jpg)

* In the first pass through the function, the function will analyze whether or not the low index is less than the high to determine if sorting is necessary.
* This is followed by the partition helper function being called. In this call the function cycles through the values of the array until it reaches one that is greater than that of the high index value. At this point the swap helper function will switch their places and will return a pivot point for quick sort to recursively work with.

![](../../assets/CodeChallenge28_2a.jpg)

* The first recursive call of the quick sort function focuses on the left hand side of the pivot point and utilizes partition and swap to sort any values that are out of place relative to their values. After doing so it will return for the second recusrive call.

![](../../assets/CodeChallenge28_2b.jpg)

* The second recursive quick sort function focuses on the right side of the pivot point and will utilize partition and swap to sort those values as well.
* Once this second recusive call is finished the array is properly sorted by value.