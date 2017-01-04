function doubleNote(){
  this.text = "Favourite food: pesto";
}
var doubleNote = new doubleNote();

var singleViewNote = new SingleNoteViewObject(doubleNote);

(function itCreatesSingleNoteViewObject(){
  if(typeof(SingleNoteViewObject) === "undefined") {
    throw new Error("Object is undefined");
  }
  else {
    console.log("itCreatesSingleNoteViewObject test passed");
  }
})();


(function testReturnsHtmlContainingTheNoteText () {
  if(singleViewNote.displayHTML() !== "<div>Favourite food: pesto</div>") {
    throw new Error("Method returns incorrect data");
  }
  else {
    console.log("testReturnsHtmlContainingTheNoteText test passed");
  }
})();
