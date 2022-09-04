function fibonacciSequence(index){
    
    let result = 0
    let fminus2 = 0
    let fminus1 = 1
    
    for(i = 0; i < index; i++){
        result = fminus1 + fminus2
        fminus2 = fminus1
        fminus1 = result
    }
    
    return result
    
}


// printing all Fibonacci Numbers until index

for (k = 0; k < k; k++) {
    console.log(`Index [{k}] : {fibonacciSequence(k)}`)
}