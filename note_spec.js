function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
};

testAddingNewNote("Text");

function testListingAllNotes() {
  var note = new Note("This is a note on Tuesday");
  var items = new noteList();
  items.addNoteToList(note);
  assert.isTrue(items.list[0] === note);
};

testListingAllNotes("This is a note on Tuesday");
