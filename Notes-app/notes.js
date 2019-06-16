const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes..."
}

/*
add a new note into file
*/
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){ // note just a variabe name, filter will filt entry array
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note title added!')
    }else{
        console.log('Note title already exist!')
    }

}

/*
    remoev notes from file
*/
const removeNote = function (title) {
    const notes = loadNotes() //loading data from exit file
    const notesToKeep = notes.filter(function(note){ // 
        return note.title !== title
    })
   
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note removed!'))
    }


}

/* saveNote
    -update the file
 */
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

/*loadNotes
    -load the notes from file
 */
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return [] //if we have empty file return []
    }
}


//export above function for another file
module.exports ={
    getNotes: getNotes,
    addNote: addNote ,
    removeNote: removeNote
}