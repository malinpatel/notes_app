var list = new List();
var controller = new NoteController(list);
createNote(list, "Favourite drink: seltzer");
getHTML(controller.view);
