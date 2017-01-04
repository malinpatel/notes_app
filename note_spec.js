function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
};

testAddingNewNote("Text");

function testListingAllNotes() {
  var note = { text: "This is a note on Tuesday" }
  var noteList = new NoteList();
  noteList.addNoteToList(note);
  assert.isTrue(noteList.list[0] === note);
};

testListingAllNotes("This is a note on Tuesday");

function testNoNotesDisplayed() {
  var listHTML = new ListHTML({ list: [] });
  if (listHTML.view() !== "<ul></ul>"){
    throw new Error("No empty list")
  }
};

testNoNotesDisplayed();

function testOneNoteDisplayed() {
  var noteList = { list: [{ text: "This is a note on Tuesday" }]};
  var listHTML = new ListHTML(noteList);
  if (listHTML.view() !== "<ul><li>This is a note on Tuesday</li></ul>"){
    throw new Error("No items in list")
  }
};

testOneNoteDisplayed();

function testMultipleNotesDisplayed(){
  var noteList = { list: [{text: "This is a note"}, {text: "Another note"}]};
  var listHTML = new ListHTML(noteList);
  if (listHTML.view() !== "<ul><li>This is a note</li><li>Another note</li></ul>"){
    throw new Error("No items in list")
  }
};

testMultipleNotesDisplayed();
