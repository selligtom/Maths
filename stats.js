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

// Example array 
let marksTable = [10,15,12.5,10,20,18.25,13,7.5,9.5,17,18,14] 

console.log(`mean : ${mean(marksTable)}`)
console.log(`median : ${median(marksTable)}`)

