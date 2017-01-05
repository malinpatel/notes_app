(function(exports){
  function SingleNote(note){
    this.note = note;
  }

  SingleNote.prototype.displayNote = function(){
    var html = "<div>" + this.note.text + "</div>"
    return html
  }

    exports.SingleNote = SingleNote;
  })(this);
