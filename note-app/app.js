// const fs = require('fs')
//
// fs.appendFileSync('note.txt', 'This file was created by Node.js', 'utf8')

// Run the app with the following command:
// node app.js
// The file note.txt should now be created in the same directory as app.js.
// Open the file and verify that the text was added to it.

// const add = require('./utils.js')
// const name = 'Andrew'

// const sum = add(4, -2)
//
// console.log(sum)

// const Notes = require('./notes.js')

// const msg = Notes()

// console.log(msg)

// validator = require('validator') // npm module validator


// console.log(validator.isEmail('andrew@example.com'))  // validate email returns true if valid email

// console.log('is thiS a url : '+validator.isURL('https://mead.io'))  // validate url returns true if valid url



const chalk = require('chalk') // npm module chalk
const notes = require('./notes')
const yargs = require('yargs')

// console.log(chalk.red.bold('Error!')) // chalk.blue.bold('Hello world!')) // outputs blue text
// const command = process.argv[2]
yargs.version('1.1.0') // set version number

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title', // description
            demandOption: true, // required
            type: 'string' // type of value

        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title : {
            describe: 'Note title', // description
            demandOption: true, // required
            type: 'string' // type of value
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)

    }
})
// Create list command
yargs.command({
    command : 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes!')
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})

// add, remove, read, list
yargs.parse() // parse arguments
// console.log(yargs.argv)
