function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
};

testAddingNewNote("Text");

function testListingAllNotes() {
  var note = { text: "This is a note on Tuesday" }
  var items = new NoteList();
  items.addNoteToList(note);
  assert.isTrue(items.list[0] === note);
};

testListingAllNotes("This is a note on Tuesday");

function testNoNotesDisplayed() {
  var listHTML = new ListHTML({ list: [] });
  if (listHTML.view() !== "<ul></ul>"){
    throw new Error("No empty list")
  }
};

testNoNotesDisplayed();
