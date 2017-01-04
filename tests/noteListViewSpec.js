var view = new View(new List());
(function createNewNoteListView () {

  if(typeof(view.list) === "undefined" ) {
    throw new Error("A new List object wasn't instantiated");
  }
  else {
    console.log("createNewNoteListViewtest passed");
  }
})();


(function returnsListModelHtml () {
  view.list.notes = [];
  view.list.notes[0] = new Note("I like beer");
  view.list.notes[1] = new Note("I like pizza");

  if(htmlList(view.list) !== "<ul><li><div>I like beer</div></li><li><div>I like pizza</div></li></ul>") {
    throw new Error("Returned incorrect string");

  }
  else {
    console.log("returnsListModelHtml  passed");
  }
})();

(function returnsFirstTwentyCharacters () {
  view.list.notes = [];
  view.list.notes[0] = new Note("Hello I'm only twenty characters long");
  if(htmlList(view.list) !== "<ul><li><div>Hello I'm only twent</div></li></ul>") {
    throw new Error("String is too long");
  }
  else {
    console.log("returnsFirstTwentyCharacters passed");
  }
})();


(function handlesAnyNumberOfNotes () {
    view.list.notes = [];
    if(htmlList(view.list) === "")  {
      throw new Error("Method is incorrectly returning data");
    }
    else {
      console.log("handlesAnyNumberOfNotes  passed");
    }
})();
