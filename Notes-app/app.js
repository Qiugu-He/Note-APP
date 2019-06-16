// const addF = require('./utils.js') // like inclued in c/c++, include multiple files

// const sum = addF(4,-2)
// console.log(sum)
const validator = require('validator')
const notes = require('./notes.js') // './ require own file'
const chalk = require('chalk')
const yargs = require('yargs') //helps you build interactive command line tools, 


//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{// it is on an object , define option for the commadn support
        title: { //it is also an obj
            describe:'Note title',
            demandOption:true,  // force this property is needed if it is ture
            type: 'string' // specific teh type of input
        },
        body: { //it is also an obj
            describe:'Note body',
            demandOption:true,  // force this property is needed if it is ture
            type: 'string' // specific teh type of input
        }
    }, 
    handler: function(argv){ //handler, when the command is invoked
        notes.addNote(argv.title, argv.body)

    }
})



yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('Removing a note!')
    }
})

yargs.command({
    command:'list',
    describe:'list note',
    handler: function(){
        console.log('listing note!')
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    handler: function(){
        console.log('reading note!')
    }
})

//add, remove, read, list nodes
//console.log(yargs.argv)
yargs.parse()
