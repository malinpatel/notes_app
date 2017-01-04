(function(exports){
  function NoteController(){
  this.noteList = new NoteList();
}

NoteController.prototype.addNewNote = function(){
  this.noteList.addNoteToList(new Note("Favourite drink: seltzer"));
}

exports.NoteController = NoteController
})(this);
