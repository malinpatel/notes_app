// returns text from a note

(function(note) {

  function contents(note) {
    return note.text;
  }
  note.contents = contents;
})(this);
