const fs = require('fs');
const chalk = require('chalk');


const getNotes = function(){
    return 'my notes';
}
const addNotes = function(title,body){
    const oldNotes = loadNotes();
    const duplicateNote = oldNotes.find((note)=>{
        return note.title === title;
    })
    if(!duplicateNote){
        oldNotes.push({
            title,
            body
        })
        writeNotes('notes.json',oldNotes);
        console.log(chalk.green.inverse('Note added successfully'));
    }else{
        console.log(chalk.red('Note title already exit'));
    }
    console.log(oldNotes)
}
const loadNotes = function(){
    try {
        const bufferNotes = fs.readFileSync('notes.json');
        return JSON.parse(bufferNotes.toString());
    } catch (error) {
        return [];
    }
}

const writeNotes = function(fileName,data){
    const strData = JSON.stringify(data);
    fs.writeFileSync(fileName,strData);
}

const removeNote = function(title){
    const oldNotes = loadNotes();
    const newNotes = oldNotes.filter(note => {
        return note.title !== title;
    })
    if(oldNotes.length === newNotes.length){
        console.log(chalk.red('title not available for deletion'));
    }else{
        writeNotes('notes.json',newNotes);
        console.log(chalk.green('Notes removed'))
    }
}

const listNode = function(){
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your Notes...'))
    notes.forEach(note => {
        console.log(note);
    })
}

const readNotes= function(title){

    const notes = loadNotes()
    const note = notes.find(note => {
        return note.title === title;
    })
    if(note){
        console.log(chalk.yellow(note.title)+' '+note.body);
    }else{
        console.log(chalk.red('ERROR: Note not found!!!'));
    }
}
module.exports = {
    getNotes,
    addNotes,
    removeNote,
    listNode,
    readNotes
}; 