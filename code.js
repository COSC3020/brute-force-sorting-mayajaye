function permutationSort(arr) {
    let permCount = 0;

    function swap(arr, i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    function* permutations(k, arr) { //generator function that generates all permutations of an array recursively
        if (k <= 1) {   //record the current array if there's only one element to permute
            yield arr;
        } else {
            yield* permutations(k - 1, arr); //recursively get permutations for k-1 elements
            for (let i = 0; i < k-1; i++) {
                if ((k % 2) == 0) swap(arr, i, k-1); //if even, swap ith element with last element
                else swap(arr, 0, k-1);              //if odd, swap first element with last element
                yield* permutations(k - 1, arr); //recursively get permutations with the last element swapped out
            }
        }
    }


    for (const perm of permutations(arr.length, arr)) { //iterate through all perms until we find a sorted one
        permCount++;
        let sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        if (sorted) break;
    }

    return permCount;
}

