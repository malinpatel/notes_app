(function(exports) {
  function ListHTML(noteList) {
    this.noteList = noteList
  };

  ListHTML.prototype.view = function() {
    var string = "<ul>"
    for(var i = 0; i < this.noteList.list.length; i++)
    string += "<li>" + this.noteList.list[i].text.substring(0,20) + "</li>"
    return string + "</ul>"
  };

  exports.ListHTML = ListHTML;
})(this);
