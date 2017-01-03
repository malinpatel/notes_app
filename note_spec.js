function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === 'Text');
};

testAddingNewNote('Text');
