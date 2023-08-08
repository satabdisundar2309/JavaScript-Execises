// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

function commonElements(arr1, arr2){
    let arr3=[];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && !arr3.includes(arr2[i]))
        {
            arr3.push(arr1[i]);
        }

    }
    return arr3;
}
let arr1=[4,1,6,10,89];
let arr2=[10,6,89,1,56];
console.log(commonElements(arr1,arr2));

