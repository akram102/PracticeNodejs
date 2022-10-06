const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs');
const { argv } = require('yargs');


yargs.command({
    command : 'add',
    describe : 'Adding item to list',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'body of notes',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove notes from list',
    builder : {
        title : {
            describe : 'Name of the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'list notes',
    handler : function(){
        notes.listNode();
    }
})

yargs.command({
    command : 'read',
    describe : 'reading notes',
    builder : {
        title : {
            describe : 'title name',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.readNotes(argv.title);
    }
})
yargs.parse()
