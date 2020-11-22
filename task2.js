const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

let searchName = (keyWord, limit, callback) => {
    let arrLength = name.length-1 

    return callback(keyWord, limit, arrLength)
}

let byKeyword = (keyWord, limit, arrLength) => {
    let result = []

    for(i = 0; i <= arrLength; i++){
        if (name[i].toLowerCase().includes(keyWord.toLowerCase()) && result.length < limit){
            result.push(name[i])
        }
    }
    
    return result
}

let result = searchName('an', 3, byKeyword)
console.log(result)

    