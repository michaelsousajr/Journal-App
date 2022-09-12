export default class notesView{
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {});
        this.root = root;
        this.onNoteSelect = root;
        this.onNoteAdd = root;
        this.onNoteEdit = root;
        this.onNoteDelete = root;
        this.root.innerHTML =  
            <div class="notes__sidebar">
            <button class="notes__add" type="button">Add New Entry</button>
            <div class="notes__list">
                <div class="notes__list-item notes__list-item--selected">
                    <div class="notes__small-title">Lecture Notes</div>
                    <div class="notes__small-body">Learned nothing</div>
                    <div class="notes__small-updated">Thurs 3pm</div>
                </div>
            </div>
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a Title">
            <textarea class="notes__body">I am notes body</textarea>
        </div>
        ;
    }
}