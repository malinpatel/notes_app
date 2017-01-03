(function(exports) {
  var noteList = function() {
    this.list = [];
    noteList.prototype.listNoteItems = function() {
      return this.list;
    };
    noteList.prototype.addNoteToList = function(text) {
      this.list.push(text)
    };
  };
  exports.noteList = noteList;
})(this);
