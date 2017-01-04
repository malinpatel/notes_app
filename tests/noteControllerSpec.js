var noteController = new NoteController();

function testsInstatiationOfNoteController() {
  if (typeof(NoteController) === "undefined") {
      throw new Error("List is not defined");
  } else if
      (noteController instanceof NoteController === false) {
    throw new Error("noteController was not instantiated");
  } else {
      console.log("testsInstatiationOfNoteController test passed");
  }
};

testsInstatiationOfNoteController();
