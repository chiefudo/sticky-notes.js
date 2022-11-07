const CreateForm = document.querySelector('#createNote')
const titleinput = CreateForm.title
const descriptionInput = CreateForm.description

CreateForm.onsubmit = function (evt) {
    evt.preventDefault()

    if (!titleinput.value.trim() || !descriptionInput.value.trim()) {
        let errormsg= 'Title or  description cannot be empty'
    }

    console.clear()

    let stickyNote = {
        title: titleinput.value,
        description: descriptionInput.value,
        date_created: new Date().toDateString()
    }

    console.log(stickyNote)
    notes.innerHTML += generateStickyNotes(stickyNote)
     titleInput.value=' '
    descriptionInput.value =''
}

     function generateStickyNotes (note) {
    return `
        <div class="p-5 border rounded-1g shadow">
            <h2>${note.title}</h2>
            <p>${note.description}</p>
            <p>Created:${note.date_created}</p>
        </div>
    `
}
