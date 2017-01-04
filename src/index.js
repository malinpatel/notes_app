list = new List();
createNote(list, "Favourite drink: seltzer");
var controller = new NoteController(list);
getHTML(controller.view);
