var NoteController = function (list) {
  this.view = new View(list);
};


function changeDiv () {
  var elem = document.getElementById('app');
  elem.innerHTML = 'howdy';
}
//changeDiv();
