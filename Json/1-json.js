const fs = require('fs')

// const book = { // this is book obj
//     title: 'War world 1',
//     author: 'This body'
// }

// const bookJSON = JSON.stringify(book) // return JSON data
// fs.writeFileSync('1-json.json',bookJSON)

// const  databuf = fs.readFileSync('1-json.json')
// const dataJSON = databuf.toString() // convert to string 
// const data = JSON.parse(dataJSON)   //convet json data into obj
// console.log(data.title)

const databuf = fs.readFileSync('1-json.json') // read and load JSON data
const dataJSON = databuf.toString() // convert to string 

const user = JSON.parse(dataJSON) //parse JSON to obj
console.log(user.name)

user.name = "BigM" //update info
user.plant="Mars"

const userJSON = JSON.stringify(user) // convert to JSON
fs.writeFileSync('1-json.json', userJSON) //update the data

 