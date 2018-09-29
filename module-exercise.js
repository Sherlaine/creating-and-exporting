// Create a module that exports a function that takes a number as a parameter and stores it in a list. 

//The list should not be accessible from outside the module.

// module.exports = function () { /* ... */ }
var list = [];

function ascendingNumbers(a, b) {
    return a - b;
}

function storeNumbers(number) {
    list.push(number);

}

function sortsNumbers() {
    list.sort(ascendingNumbers)
    return list;
}




// Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

module.exports = {
    storeNumbers: storeNumbers,
    sortsNumbers: sortsNumbers
}