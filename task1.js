//  forEach digunakan untuk loop semua item didalam array
const forEachData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

forEachData.forEach(item => {
    console.log(item)
})

// includes digunakan untuk mengecek apakah parameter yang diberikan didalam method ada pada data yang di check, mengembalikan output boolean
const includesData = 'abraham'

let result = includesData.includes('ab')
console.log(result)

// filter digunakan untuk membuat array baru yang berisi elemen yang lolos dari pengecekan didalam method
const filterData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filtered = filterData.filter(filterData => filterData % 2 === 0)
console.log(filtered)

// map : merubah semua elemen di dalam suatu array menjadi elemen dengan nilai yang baru.
const mapData = [1, 2, 3, 4, 5]
const oneAdded = mapData.map(num => num * 5)
console.log(oneAdded)

// reduce : menjumlahkan nilai di dalam array.
const reduceData = [1, 2, 3, 4, 5]

const sum = reduceData.reduce((total, value) => total + value)
console.log(sum)


// toString = mengubah array menjadi string
const stringData = ['javascript', 'php', 'go', 'ruby']
let stringDataResult = stringData.toString()
console.log(stringDataResult)


// every = mengecek semua element didalam array dengan kondisi yang diberikan, jika terpenuhi semua maka akan menghasilkan output true (boolean)
const everyData = [1, 2, 3, 4, 5]

const greaterFour = everyData.every(num => num > 4)
console.log(greaterFour) 

const lessTen = everyData.every(num => num < 10)
console.log(lessTen)

// concat = untuk menggabungkan string menjadi sebuah string baru
let halo = 'Halo, '
let nama = 'Eriko'
let concatResult = halo.concat(nama)
console.log(concatResult)

// Array.from = mengubah string menjadi array berdasarkan index
const name = 'javascript'
const nameArray = Array.from(name)

console.log(name)
console.log(nameArray)

// Array.of = membuat array baru dengan melemparkan value dari parameter method
const arrayOf = Array.of('ayam', 'kambing', 'kuda', 'simpanse')
console.log(arrayOf) 