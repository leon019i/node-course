const fs= require('fs')
const chalk = require('chalk')
const getNotes = function (name) {
    return 'Your notes ' + name
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.filter(function (note) {
            if (note.title === title) {
                return true
            }
        }
    )
    if (duplicateNote.length === 0) {
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

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
            return note.title !== title
        }
    )
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found with this title!'))
    }
}
const loadNotes = function () {
    try {
        const notes = fs.readFileSync('notes.json')
        const dataJSON = notes.toString()
        const parsedData = JSON.parse(dataJSON)
        return parsedData
    } catch (e) {
        return []
    }


}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
