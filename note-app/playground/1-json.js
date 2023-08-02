const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // convert object to JSON string

// console.log(bookJSON)


// const parsedData = JSON.parse(bookJSON) // convert JSON string to object

// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON) // write JSON string to file

// const dataBuffer = fs.readFileSync('1-json.json') // read file
// const dataJSON = dataBuffer.toString() // convert buffer to string
// const data = JSON.parse(dataJSON) // convert JSON string to object
// console.log(data.title) // access object property
//
// console.log(dataBuffer) // convert buffer to string


const buffer = fs.readFileSync('1-json.json')
const dataJSON = buffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Loay'
data.age = 21
const modifiedData = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json', modifiedData)
console.log(modifiedData)
