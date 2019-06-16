const fs = require('fs')

const getNotes = function(){
    return "Your notes..."
}

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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return [] //if we have empty file return []
    }
}
module.exports ={
    getNotes: getNotes,
    addNote: addNote 
}