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
  console.log(htmlList(view.list));
  if(htmlList(view.list) !== '<ul><li><div id="0">I like beer</div></li><li><div id="1">I like pizza</div></li></ul>') {
    throw new Error("Returned incorrect string");

  }
  else {
    console.log("returnsListModelHtml  passed");
  }
})();

(function returnsFirstTwentyCharacters () {
  view.list.notes = [];
  view.list.notes[0] = new Note("Hello I am only twenty characters long");
  if(htmlList(view.list) !== '<ul><li><div id="0">Hello I am only twen</div></li></ul>') {
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

(function testsElementId () {
  view.list.notes = [];
  view.list.notes[0] = new Note("Hello I am only twenty characters long");
  htmlList(view.list);
  if (document.getElementById('0') === null) {
    throw new Error("Element doesn't have the proper id");
  }
  else {
    console.log("testsElementId passed");
  }
})();
