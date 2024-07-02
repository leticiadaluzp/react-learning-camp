function positiveSum(arr) {
    total = 0;
    
    for (const value of arr){
        if (value > 0) {
            total += value;
        }
    }
    
    return total;
}
