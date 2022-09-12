import notesView from "./notesView.js"


const app = document.getElementById("app");
const view = new notesView(app, {
    onNoteSelect(){
        console.log("note has been selected");
    }
});

// notesAPI.saveNote({

//     title: "New Note",
//     body: "I love charlie."

// });

//console.log(notesAPI.getAllNotes());