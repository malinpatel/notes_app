function doubleNote(){
  this.text = "Favourite food: pesto"
};
var doubleNote = new doubleNote();

function doubleList(note){
  this.notes = [note];
};

var doubleList = new doubleList(doubleNote);

function doubleView(list) {
  this.list = list;
};

var doubleView = new doubleView(doubleList);

function doubleController(view){
  this.view = view;
};

var doubleController = new doubleController(doubleView);

getHTML(doubleController.view);

function testsIfHTMLChanges() {
  if (document.getElementById('app').innerHTML !==              "<ul><li><div>Favourite food: pesto</div></li></ul>") {
    throw new Error("List not found");
  } else {
  console.log("testIfHTMLChanges passed");
  }
};
