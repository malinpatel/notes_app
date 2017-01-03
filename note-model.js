(function(exports) {
  var Note = function(text) {
    this.text = text;
    Note.prototype.addNotes = function() {
      return text;
    };
  };
  exports.Note = Note;
})(this);
