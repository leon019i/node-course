const fs = require('fs')
const chalk = require('chalk')
const addNote = (title, body) => {
    const notes = loadNotes()
    // Previous Code
    // const duplicateNote = notes.filter(function (note) {
    //         if (note.title === title) {
    //             return true
    //         }
    //     }
    // )
    // Refactored Code

    /*
        * 1. If the duplicateNotes is empty list then the condition is false
        * 2. If the duplicateNotes is not empty list then the condition is true
        * it loops through the list and return all the duplicate notes in a list
     */

    const duplicateNotes = notes.filter((note) => note.title === title) // return the duplicate note `list` or `empty list` if no duplicate
    /*
        * it loops through the list and return the first duplicate note in a list
        * if no duplicate note then it returns undefined
        * if duplicate note then it returns the duplicate note `object`
    */
    const duplicateNote = notes.find((note) => note.title === title) // return the duplicate note `object` or `undefined`

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
        console.log(duplicateNote) // print the duplicate note `list`
    } else {
        console.log(chalk.red.bold('Note title taken!'))
        console.log(duplicateNote) // print the duplicate note `list`
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    // Previous Code
    // const notesToKeep = notes.filter(function (note) {
    //         return note.title !== title
    //     }
    // )

    // Refactored Code
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found with this title!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.blue('Your notes'))
    notes.forEach((note) => {
            console.log('The notes Title : ' + note.title + '\n' + 'The notes Body : ' + note.body + '\n')
        }
    )
}
const readNote = (title) => {
    const notes = loadNotes()
    const searchedNote = notes.find((note) => note.title === title)
    if (searchedNote) {
        console.log('The notes Title : ' + chalk.blue.bold(searchedNote.title) + '\n' + 'The notes Body : ' + searchedNote.body + '\n')

    }else {
        console.log(chalk.red.inverse('No note found with this title!'))
    }

}
const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json')
        const dataJSON = notes.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
}
