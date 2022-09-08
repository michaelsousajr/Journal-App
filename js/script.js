import notesAPI from "./notesAPI.js"


notesAPI.saveNote({

    title: "New Note",
    body: "I love charlie."

});

console.log(notesAPI.getAllNotes());