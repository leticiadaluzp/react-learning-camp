function positiveSum(arr) {
    total = 0;
    
    for (const number in arr){
        if (arr[number] > 0) {
            total += arr[number];
        }
    }
    
    return total;
}