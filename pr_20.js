// Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function findMaxByProperty(arr, propertyNames) {
    let max = arr[0];

    for (let obj of arr) {
        if (max[propertyNames] < obj[propertyNames])
            max[propertyNames] = obj[propertyNames]
    }

    return max;
}

// Test case 1
const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
];
const maxObj1 = findMaxByProperty(arr1, "price");
console.log(maxObj1);

// Test case 2
const arr2 = [
    { name: "Satabdisundar", age: 21 },
    { name: "Barsha", age: 20 },
    { name: "Snehal", age: 21 },
];
const maxObj2 = findMaxByProperty(arr2, "age");
console.log(maxObj2); 

// Test case 3
const arr3 = [];
const maxObj3 = findMaxByProperty(arr3, "price");
console.log(maxObj3);