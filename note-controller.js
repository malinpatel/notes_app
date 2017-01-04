(function(exports){
  function NoteController(){
  this.noteList = new NoteList();
  this.listHTML = new ListHTML(this.noteList)
}

NoteController.prototype.addNewNote = function(){
  this.noteList.addNoteToList(new Note("Favourite drink: seltzer"));
}

NoteController.prototype.displayNotes = function(){
  var element = document.getElementById("app")
  element.innerHTML = this.listHTML.view();
}

exports.NoteController = NoteController;
})(this);
