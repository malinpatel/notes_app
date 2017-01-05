(function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
})();

(function testListingAllNotes() {
  var note = { text: "This is a note on Tuesday" }
  var noteList = new NoteList();
  noteList.addNoteToList(note);
  assert.isTrue(noteList.list[0] === note);
})();

(function testNoNotesDisplayed() {
  var listHTML = new ListHTML({ list: [] });
  assert.isTrue(listHTML.view() === '<ul></ul>')
})();


(function testOneNoteDisplayed() {
  var noteList = { list: [{ text: "This is a note on Tuesday" }]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0">This is a note on Tu</div></li></ul>')
})();


(function testMultipleNotesDisplayed(){
  var noteList = { list: [{text: "This is a note"}, {text: "Another note"}]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0">This is a note</div></li><li><div id="1">Another note</div></li></ul>')
})();


(function testCreatingNoteList() {
  var note = { text: "Favourite drink: seltzer" }
  var noteController = new NoteController();
  noteController.addNewNote(note)
  assert.isTrue(noteController.noteList.list[0].text === "Favourite drink: seltzer")
})();


(function testNoteIsAddedToList() {
  var noteController = new NoteController();
  noteController.addNewNote();
  assert.isTrue(noteController.noteList.list.length === 1)
})();

(function testDisplayNoteList() {
  var noteController = new NoteController();
  noteController.addNewNote()
  noteController.displayNotes()
  assert.isTrue(noteController.listHTML.view() === '<ul><li><div id="0">Favourite drink: sel</div></li></ul>')
})();

(function testsinglenoteview() {
  var note = { text: "Favourite drink: seltzer" }
  var singleNote = new SingleNote(note);
  assert.isTrue(singleNote.displayNote() === "<div>Favourite drink: seltzer</div>")
})();


(function testShowsOnlyTwentyCharacters() {
  var noteList = { list: [{ text: "Favourite drink: seltzer" }]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === '<ul><li><div id="0">Favourite drink: sel</div></li></ul>')
})();


  (function testsShowsUniqueNoteId() {
    var noteList = { list: [{ text: "Favourite drink: seltzer" }]}
    var listHTML = new ListHTML(noteList);
    listHTML.view();
    element = document.getElementById("0")
      if (element.innerHTML === null ) {
        throw new Error ("ID not found")
      } else {
        console.log("testsShowsUniqueNoteId passed")
      }
  })();
