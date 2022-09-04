function mean(table){
    return (table.reduce((a, b)=> a + b) / table.length);
}

function median(table){
    
    table = table.sort((a, b) => a - b)

    if(table.length % 2 === 0){
       return (table[table.length / 2 - 1] + table[table.length / 2 ]) /2
    }else{
        return table[Math.floor(table.length / 2)]
    }
    
}


function variance(table){

    let somme = 0;
    let tableMean = mean(table)
    
    for (let index = 0; index < table.length; index++) {
        somme += Math.pow(table[index] - tableMean, 2)
    }
    
    return somme / table.length
}

function standardDeviation(table){
    return Math.pow(variance(table), 0.5)
}

// Example array 
let marksTable = [10, 15, 12, 10, 20, 18, 13, 7, 9, 17, 18, 14] 

console.log(`mean : ${mean(marksTable)}`)
console.log(`median : ${median(marksTable)}`)
console.log(`variance : ${variance(marksTable)}`)
console.log(`Standard Deviation : ${standardDeviation(marksTable)}`)


