(function (exports) {
  var SingleNoteViewObject = function (note) {
    this.note = note;
  };

  SingleNoteViewObject.prototype = {
    displayHTML: function() {
      return "<div>"+contents(this.note)+"</div>";
    }
  };

  exports.SingleNoteViewObject = SingleNoteViewObject;

})(this);
