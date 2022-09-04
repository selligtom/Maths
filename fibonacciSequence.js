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

let yourIndex = 10

for (k = 0; k < yourIndex; k++) {
    console.log(`Index [${k + 1}] : ${fibonacciSequence(k)}`)
}