function adjacentElementsProduct(array) {
    let maxProduct = array[0] * array[1];
    
    for (let i = 1; i < array.length - 1; i++) {
        const product = array[i] * array[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    
    return maxProduct;
}

// Example usage:
console.log(adjacentElementsProduct([1, 2, 3])); // Output: 6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // Output: 50
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // Output: -14
