# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

#### I've deduced that the runtime of this algorithm is $T(n) \in \Theta(n! \cdot n)$ by this reasoning:

The steps of this algorithm are:
1. Generate all permutations. This will always generate n! permutations with a runtime of n!
2. Iterate over permutations to check if they are sorted. This will iterate over all n! permutations on the worst case
	3. Iterate over permutation to check if it is sorted. This will have a linear runtime of n

The runtime equation is: $T(n) = n! + (n! \cdot n)$

$(n! \cdot n)$ is the dominant term, so:

$T(n) \in \Theta(n! \cdot n)$


If I generated the permutations without keeping track of the ones I've already 
tried, there would always be a $\frac{1}{n!}$ chance that the sorted permutation
is found. On the worst case, I'm pretty sure it's possible for the algorithm to 
never terminate since the probability of finding the sorted permutation will never
increase. Otherwise, I'm not sure that we can analyze the complexity much, because
there is no guarantee the sorted permutation will be found and the runtime just 
depends on chance.

The best case input would be an already sorted array. The first permutation found would be the sorted array.

The worst case input would be a reverse sorted array. The last permutation found would be the sorted array.

### Sources

I generated all the permutations using [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."
