list = new List();
createNote(list, "Favourite drink: seltzer");
createNote(list, "A very long string just to test the functionality");
var controller = new NoteController(list);
getHTML(controller.view);
